import { BrowserRouter, Routes as RoutesContainer, Route } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Checkout } from '@pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </RoutesContainer>
    </BrowserRouter>
  )
}
