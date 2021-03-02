import { AuthProvider } from "../lib/auth"
import { ThemeProvider } from '@chakra-ui/react'

import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp