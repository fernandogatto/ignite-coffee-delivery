import { useFormContext } from 'react-hook-form';

import { CheckoutCoffeeItem } from '@components';

import { useCart } from '@contexts/CartContext';

import { CheckoutProductsContainer } from './styles';

export function CheckoutProducts() {
  const { formState: {
    isValid,
  }} = useFormContext()

  const { products, priceInCart } = useCart()

  return (
    <CheckoutProductsContainer>
      <h2>Cafés selecionados</h2>

      <div className="products-card">
        {products.length > 0 && products.map((item) => (
          <CheckoutCoffeeItem
            key={item.id}
            data={item}
          />
        ))}

        {products.length === 0 && (
          <p>Nenhum item foi selecionado</p>
        )}

        <div className="price-info">
          <p>Total de itens</p>

          <span>R$ {priceInCart.toFixed(2)}</span>
        </div>

        <div className="price-info">
          <p>Entrega</p>

          <span>R$ 0.00</span>
        </div>

        <div className="price-info price-info-total">
          <p>Total</p>

          <span>R$ {priceInCart.toFixed(2)}</span>
        </div>

        <button type="submit" disabled={!isValid}>
          Confirmar pedido
        </button>
      </div>
    </CheckoutProductsContainer>
  )
}
