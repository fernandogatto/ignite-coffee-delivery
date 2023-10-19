import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'

import coffeeHome from '@assets/coffee-home.png'

import { CoffeeCard } from '@components'

import { coffees } from '@constants/coffees'

import { defaultTheme } from '@styles/themes/default'

import { IntroIcon } from '@components'

import { HomeContainer, BannerContainer, CoffeesContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <div className="info-container">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <div className="items-list-container">
            <IntroIcon
              backgroundColor={defaultTheme['yellow-700']}
              icon={<ShoppingCartSimple size={20} weight="fill" />}
              description="Compra simples e segura"
            />

            <IntroIcon
              backgroundColor={defaultTheme['gray-600']}
              icon={<Package size={20} weight="fill" />}
              description="Embalagem mantém o café intacto"
            />

            <IntroIcon
              backgroundColor={defaultTheme['yellow-500']}
              icon={<Timer size={20} weight="fill" />}
              description="Entrega rápida e rastreada"
            />

            <IntroIcon
              backgroundColor={defaultTheme['purple-500']}
              icon={<Coffee size={20} weight="fill" />}
              description="O café chega fresquinho até você"
            />
          </div>
        </div>

        <img src={coffeeHome} alt="Coffee Delivery" />
      </BannerContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <div className="coffee-grid">
          {coffees.map((item) => (
            <CoffeeCard
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
