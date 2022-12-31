import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faRocket,faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faRocket,faHeart);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
