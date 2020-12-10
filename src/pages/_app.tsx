import "normalize.css"
import { AppProps } from "next/app"
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css"
import Theme from "../components/Context/Theme"

export default function App({ Component, pageProps }: AppProps) {
  return(
      <Theme>
        <Component {...pageProps} />
      </Theme>
      )
}
