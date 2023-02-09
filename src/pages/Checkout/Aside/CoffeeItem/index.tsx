import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ActionButtons,
  CoffeeIndividualData,
  CounterButtons,
  GroupForStyle,
  TrashButton,
} from './style'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Item } from '../../../../reducers/items/reducer'

// data: { coffee: Coffee }

export function CoffeeItem(item: Item) {
  const { changeAmount, removeItem } = useContext(OrderContext)

  return (
    <CoffeeIndividualData>
      <GroupForStyle>
        <img src={item.coffee.src} alt=""></img>
        <div>
          <strong>{item.coffee.name}</strong>
          <ActionButtons>
            <CounterButtons>
              <button
                type="button"
                onClick={() => {
                  changeAmount(item, -1)
                }}
              >
                <Minus size={16} />
              </button>

              <span>{item.amount}</span>
              <button
                type="button"
                onClick={() => {
                  changeAmount(item, 1)
                }}
              >
                <Plus size={16} />
              </button>
            </CounterButtons>
            <TrashButton
              type="button"
              onClick={() => {
                removeItem(item)
              }}
            >
              <Trash size={16} />
              REMOVER
            </TrashButton>
          </ActionButtons>
        </div>
      </GroupForStyle>
      <p>R$ {(item.coffee.price * item.amount).toFixed(2)}</p>
    </CoffeeIndividualData>
  )
}
