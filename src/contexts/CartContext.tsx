import { createContext, ReactNode, useContext, useReducer, useState } from 'react';

import { cartReducer } from '@reducers/cart/reducer';
import { addToCartAction, removeAllItemsFromCartAction, removeFromCartAction, removeQuantityAction } from '@reducers/cart/actions';

import { ICoffee } from '@constants/coffees';

import { getStorage } from '@utils/storage';

interface ICartProviderProps {
  children: ReactNode
}

export interface ICoffeeCart extends ICoffee {
  quantity: number | 0
}

interface ICartContextProps {
  products: Array<ICoffeeCart>,
  quantityInCart: number,
  priceInCart: number,
  typePayment: string,
  addToCart: (product: ICoffee) => void,
  removeQuantity: (product: ICoffee) => void,
  removeFromCart: (product: ICoffee) => void,
  removeAllItemsFromCart: () => void,
  setTypePaymentValue: (value: string) => void,
}

export const CartContext = createContext({} as ICartContextProps)

function CartProvider({ children }: ICartProviderProps) {
  const { productsStorage, quantityInCartStorage, priceInCartStorage } = getStorage()

  const initialState = {
    products: productsStorage,
    quantityInCart: quantityInCartStorage,
    priceInCart: priceInCartStorage,
  }

  const [cartState, dispatch] = useReducer(cartReducer, initialState)
  const { products, quantityInCart, priceInCart } = cartState

  const [typePayment, setTypePayment] = useState('')

  console.log('products',products)
  console.log('quantityInCart',quantityInCart)
  console.log('priceInCart',priceInCart)

  function addToCart(product: ICoffee) {
    dispatch(addToCartAction(product))
  }

  function removeQuantity(product: ICoffee) {
    dispatch(removeQuantityAction(product))
  }

  function removeFromCart(product: ICoffee) {
    dispatch(removeFromCartAction(product))
  }

  function removeAllItemsFromCart() {
    dispatch(removeAllItemsFromCartAction())
  }

  function setTypePaymentValue(value: string) {
    setTypePayment(value)
  }

  return (
    <CartContext.Provider value={{
      products,
      quantityInCart,
      priceInCart,
      typePayment,
      addToCart,
      removeQuantity,
      removeFromCart,
      removeAllItemsFromCart,
      setTypePaymentValue,
    }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  return context
}

export { CartProvider, useCart }
