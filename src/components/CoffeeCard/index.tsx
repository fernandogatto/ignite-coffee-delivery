import { CoffeeCounter } from '@components';

import { ICoffee } from '@constants/coffees'

import { CoffeeContainer } from './styles';

interface ICoffeeCardProps {
  data: ICoffee
}

export function CoffeeCard({ data }: ICoffeeCardProps) {
  return (
    <CoffeeContainer>
      <img src={data.image} alt={data.name} />

      <div className="info-container">
        <div className="tags-container">
          <div className="tag-item">
            <span>{data.type}</span>
          </div>
        </div>

        <h4 className="name">{data.name}</h4>

        <p className="description">{data.description}lo</p>

        <div className="buy-container">
          <div>
            <p><span>R$</span> <strong>{(data.price).toFixed(2)}</strong></p>
          </div>

          <div>
            <CoffeeCounter product={data} />
          </div>
        </div>
      </div>
    </CoffeeContainer>
  )
}
