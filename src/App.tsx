import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@styles/themes/default'

import { AppProvider } from '@contexts'
import { Routes } from '@routes'

import { GlobalStyle } from '@styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
