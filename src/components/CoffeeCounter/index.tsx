import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'

import { ICoffeeCart, useCart } from '@contexts/CartContext'

import { ICoffee } from '@constants/coffees'

import {
  CoffeeCounterContainer,
  CounterContainer,
  RemoveCartButton,
  AddCartButton,
} from './styles'

interface ICoffeeCounterProps {
  isCheckout?: boolean | true
  product: ICoffee
}

export function CoffeeCounter({ isCheckout, product }: ICoffeeCounterProps) {
  const { products, removeQuantity, removeFromCart, addToCart } = useCart()

  const productExists = products.length > 0 &&
    products.find((item: ICoffeeCart) => item.id === product.id)

  const quantity = productExists && productExists.quantity
    ? productExists.quantity
    : 0

  const isDisabledToRemove = !!(quantity === 0)

  return (
    <CoffeeCounterContainer>
      <CounterContainer>
        <button
          title="Remover uma quantidade"
          aria-label="Remover uma quantidade"
          onClick={() => removeQuantity(product)}
          disabled={isDisabledToRemove}
        >
          <Minus size={14} />
        </button>

        {quantity}

        <button
          title="Adicionar uma quantidade"
          aria-label="Adicionar uma quantidade"
          onClick={() => addToCart(product)}
        >
          <Plus size={14} />
        </button>
      </CounterContainer>

      {isCheckout ? (
        <RemoveCartButton
          title="Remover item do carrinho"
          aria-label="Remover item do carrinho"
          onClick={() => removeFromCart(product)}
        >
          <Trash size={20} />

          Remover
        </RemoveCartButton>
      ) : (
        <AddCartButton
          title="Adicionar ao carrinho"
          aria-label="Adicionar ao carrinho"
          onClick={() => addToCart(product)}
        >
          <ShoppingCartSimple size={20} weight="fill" />
        </AddCartButton>
      )}
    </CoffeeCounterContainer>
  )
}
