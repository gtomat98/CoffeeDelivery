import { Coffee } from '../../contexts/OrderContext'

import { ActionTypes } from './actions'

import { produce } from 'immer'

export interface Item {
  coffee: Coffee
  amount: number
}

interface ItemsState {
  items: Item[]
}

export function itemsReducer(state: ItemsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.items.push(action.payload.data)
      })

    case ActionTypes.CHANGE_ITEM_AMOUNT: {
      const sameItem = state.items.findIndex((item) => {
        return (
          item.coffee.name === action.payload.itemToChangeAmount.coffee.name
        )
      })

      if (sameItem < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items[sameItem].amount += action.payload.amount
      })
    }

    case ActionTypes.REMOVE_ITEM: {
      const filtered = state.items.filter(
        (item) => item.coffee.name !== action.payload.itemToRemove.coffee.name,
      )

      return produce(state, (draft) => {
        draft.items = filtered
      })
    }
  }

  return state
}
