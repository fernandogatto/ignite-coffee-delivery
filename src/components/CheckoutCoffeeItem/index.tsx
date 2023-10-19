import { ICoffee } from '@constants/coffees';

import { CoffeeCounter } from '@components';

import { CheckoutCoffeeItemContainer } from './styles';

interface ICheckoutCoffeItemProps {
  data: ICoffee
}

export function CheckoutCoffeeItem({ data }: ICheckoutCoffeItemProps) {
  return (
    <CheckoutCoffeeItemContainer>
      <div className="coffee-info">
        <img
          src={data.image}
          alt={data.name}
        />

        <div>
          <p>{data.name}</p>

          <CoffeeCounter isCheckout product={data} />
        </div>
      </div>

      <div>
        <p><strong>R$ {(data.price).toFixed(2)}</strong></p>
      </div>
    </CheckoutCoffeeItemContainer>
  )
}
