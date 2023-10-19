import { ReactNode } from 'react'

import { CartProvider } from './CartContext'

interface IAppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: IAppProviderProps) {
  return <CartProvider>{children}</CartProvider>
}
