/* eslint-disable no-unused-vars */
import { Item } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  CHANGE_ITEM_AMOUNT = 'CHANGE_ITEM_AMOUNT',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function addNewItemAction(data: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      data,
    },
  }
}

export function changeItemAmountAction(
  itemToChangeAmount: Item,
  amount: number,
) {
  return {
    type: ActionTypes.CHANGE_ITEM_AMOUNT,
    payload: {
      itemToChangeAmount,
      amount,
    },
  }
}

export function removeItemAction(itemToRemove: Item) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemToRemove,
    },
  }
}
