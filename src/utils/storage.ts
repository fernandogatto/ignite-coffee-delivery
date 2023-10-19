import { ICoffeeCart } from "@contexts/CartContext"

export function getStorage() {
  const productsStorage = JSON.parse(localStorage.getItem('@igniteCoffeeDelivery:products') || '[]')
  const quantityInCartStorage = Number(localStorage.getItem('@igniteCoffeeDelivery:quantityInCart'))
  const priceInCartStorage = Number(localStorage.getItem('@igniteCoffeeDelivery:priceInCart'))

  return { productsStorage, quantityInCartStorage, priceInCartStorage }
}

export function populateStorage(products: Array<ICoffeeCart>, quantityInCart: number, priceInCart: number) {
  localStorage.setItem('@igniteCoffeeDelivery:products', JSON.stringify(products))
  localStorage.setItem('@igniteCoffeeDelivery:quantityInCart', String(quantityInCart))
  localStorage.setItem('@igniteCoffeeDelivery:priceInCart', String(priceInCart))
}
