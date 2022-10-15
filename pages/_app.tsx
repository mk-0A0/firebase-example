import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {app} from "../lib/firebaseConfig"

app()

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
