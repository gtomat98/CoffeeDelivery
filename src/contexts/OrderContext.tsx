import { ReactNode, createContext, useReducer, useState } from 'react'

import Tradicional from '../assets/Coffees/Tradicional.svg'
import Árabe from '../assets/Coffees/Árabe.svg'
import Capuccino from '../assets/Coffees/Capuccino.svg'
import Cremoso from '../assets/Coffees/Cremoso.svg'
import Cubano from '../assets/Coffees/Cubano.svg'
import Gelado from '../assets/Coffees/Gelado.svg'
import Havaino from '../assets/Coffees/Havaino.svg'
import Irlandês from '../assets/Coffees/Irlandês.svg'
import Latte from '../assets/Coffees/Latte.svg'
import Leite from '../assets/Coffees/Leite.svg'
import Macchiato from '../assets/Coffees/Macchiato.svg'
import Mocaccino from '../assets/Coffees/Mocaccino.svg'
import Quente from '../assets/Coffees/Quente.svg'
import Americano from '../assets/Coffees/Americano.svg'

interface Address {
  zipCode: string
  num: string
  street: string
  complement?: string
  district: string
  town: string
  state: string
}

export interface Coffee {
  src: string
  tag: {
    type: 'TRADICIONAL' | 'ESPECIAL'
    milked?: 'COM LEITE'
    cold?: 'GELADO'
    alcoholic?: 'ALCOÓLICO'
  }
  name: string
  description: string
  price: number
}

export interface Item {
  coffee: Coffee
  amount: number
}

export interface Order {
  clientAddress: Address
  payment: 'CreditCard' | 'DebitCard' | 'Cash' | string
  items: Item[]
  date: Date
}

interface OrderContextType {
  newClientOrder: Order | undefined

  items: Item[]

  coffeesInfo: Array<Coffee>

  styleAddedToBag: boolean
  handleAnimationEnd: () => void

  newItem: (data: Item) => void
  handleNewClientOrder: (data: Order) => void
  changeAmount: (itemToChangeAmount: Item, amount: number) => void
  removeItem: (itemToRemove: Item) => void
}

const coffeesInfo: Array<Coffee> = [
  {
    src: Tradicional,
    tag: {
      type: 'TRADICIONAL',
    },
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 5.9,
  },

  {
    src: Americano,
    tag: {
      type: 'TRADICIONAL',
    },
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.5,
  },

  {
    src: Cremoso,
    tag: {
      type: 'TRADICIONAL',
    },
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 7.5,
  },

  {
    src: Gelado,
    tag: {
      type: 'TRADICIONAL',
      cold: 'GELADO',
    },
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7.5,
  },

  {
    src: Leite,
    tag: {
      type: 'TRADICIONAL',
      milked: 'COM LEITE',
    },
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.5,
  },

  {
    src: Latte,
    tag: {
      type: 'TRADICIONAL',
      milked: 'COM LEITE',
    },
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 14.5,
  },

  {
    src: Capuccino,
    tag: {
      type: 'TRADICIONAL',
      milked: 'COM LEITE',
    },
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },

  {
    src: Macchiato,
    tag: {
      type: 'TRADICIONAL',
      milked: 'COM LEITE',
    },
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 14.5,
  },

  {
    src: Mocaccino,
    tag: {
      type: 'TRADICIONAL',
      milked: 'COM LEITE',
    },
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 14.5,
  },

  {
    src: Quente,
    tag: {
      type: 'ESPECIAL',
      milked: 'COM LEITE',
    },
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 10.5,
  },

  {
    src: Cubano,
    tag: {
      type: 'ESPECIAL',
      cold: 'GELADO',
      alcoholic: 'ALCOÓLICO',
    },
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 12.5,
  },

  {
    src: Havaino,
    tag: {
      type: 'ESPECIAL',
    },
    name: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 12.5,
  },

  {
    src: Árabe,
    tag: {
      type: 'ESPECIAL',
    },
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 12.5,
  },

  {
    src: Irlandês,
    tag: {
      type: 'ESPECIAL',
      alcoholic: 'ALCOÓLICO',
    },
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 12.5,
  },
]

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

interface ItemsState {
  items: Item[]
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [newClientOrder, setNewClientOrder] =
    useState<OrderContextType['newClientOrder']>()

  const [itemsState, dispatch] = useReducer(
    (state: ItemsState, action: any) => {
      if (action.type === 'ADD_NEW_ITEM') {
        return {
          ...state,
          items: [...state.items, action.payload.data],
        }
      }

      if (action.type === 'CHANGE_ITEM_AMOUNT') {
        return {
          ...state,
          items: state.items.map((item) => {
            if (
              item.coffee.name === action.payload.itemToChangeAmount.coffee.name
            ) {
              return { ...item, amount: action.payload.amount + item.amount }
            } else {
              return item
            }
          }),
        }
      }

      if (action.type === 'REMOVE_ITEM') {
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              item.coffee.name !== action.payload.itemToRemove.coffee.name,
          ),
        }
      }

      return state
    },
    { items: [] },
  )

  const { items } = itemsState
  const [styleAddedToBag, setStyleAddedToBag] = useState(false)
  function handleAnimationEnd() {
    setStyleAddedToBag(false)
  }

  function newItem(data: Item) {
    setStyleAddedToBag(true)
    dispatch({
      type: 'ADD_NEW_ITEM',
      payload: {
        data,
      },
    })
  }

  function handleNewClientOrder(data: Order) {
    setNewClientOrder(data)
  }

  function changeAmount(itemToChangeAmount: Item, amount: number) {
    setStyleAddedToBag(true)
    dispatch({
      type: 'CHANGE_ITEM_AMOUNT',
      payload: {
        itemToChangeAmount,
        amount,
      },
    })
  }

  function removeItem(itemToRemove: Item) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        itemToRemove,
      },
    })
  }

  return (
    <OrderContext.Provider
      value={{
        newClientOrder,
        handleNewClientOrder,
        items,
        newItem,
        changeAmount,
        removeItem,
        styleAddedToBag,
        handleAnimationEnd,
        coffeesInfo,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
