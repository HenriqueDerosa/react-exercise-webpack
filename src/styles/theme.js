import React from 'react'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import globalStyle from './global'
import palette from './palette'
import typography from './typography'
import components from './components'

const theme = createTheme({
  palette,
  typography,
  components,
})

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={globalStyle} />
    {children}
  </ThemeProvider>
)

export default Theme
