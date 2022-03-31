import '../styles/globals.css'
import { TinderProvider } from '../context/TinderContext'
import { MoralisProvider } from 'react-moralis'
function MyApp({ Component, pageProps }) {

  return(
    <MoralisProvider
    serverUrl='https://xxpegwprapyz.usemoralis.com:2053/server'
    appId='z60p1lM0C6Q2O3audKfVQ7xsSgFZ7BuwDaqHmQTr'
    >

      <TinderProvider >
     <Component {...pageProps} />
     </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp
