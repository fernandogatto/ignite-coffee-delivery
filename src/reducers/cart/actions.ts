import { ICoffee } from '@constants/coffees'

import { cartActionTypes } from './types'

export function addToCartAction(product: ICoffee) {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: {
      product
    }
  }
}

export function removeQuantityAction(product: ICoffee) {
  return {
    type: cartActionTypes.REMOVE_QUANTITY,
    payload: {
      product
    }
  }
}

export function removeFromCartAction(product: ICoffee) {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: {
      product
    }
  }
}

export function removeAllItemsFromCartAction() {
  return {
    type: cartActionTypes.REMOVE_ALL_ITEMS_FROM_CART,
  }
}
