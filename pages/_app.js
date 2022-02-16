import { useEffect } from 'react'
import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'

configureAmplify()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
