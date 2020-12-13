import {ReactNode} from "react"
import Head from "next/head"
import Navigation from "../Navigation"
import { useTheme } from "../Context/Theme"
import styles from "./_.module.css"

type Props = {
	children: ReactNode
}
const {layout, dark} = styles
export default function Layout({ children }: Props) {
	const [ theme ] = useTheme()

	return (
		<div className={[layout, theme && dark].join(" ")}>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="theme-color" content="#001122"/>
				<link rel="icon" href={`/assets/favicon.ico`} />
				<link rel="icon" type="image/png" sizes="16x16" href={`/assets/favicon-16x16.png`}/>
				<link rel="icon" type="image/png" sizes="32x32" href={`/assets/favicon-32x32.png`}/>
				<link rel="apple-touch-icon" href={`/assets/apple-touch-icon.png`}/>
				<link rel="apple-touch-icon" sizes="180x180" href={`/assets/apple-touch-icon.png`}/>
				<link rel="mask-icon" color="#223344"/>
				<link rel="manifest" href={`/site.webmanifest`}/>
				<meta name="theme-color" content="#001122"/>
				<meta property="og:type" content="website" key={"type"}/>
			</Head>
			<nav>
				<Navigation />
			</nav>
			<main>{children}</main>
		</div>
	)
}
