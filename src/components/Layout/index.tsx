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
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<meta name="theme-color" content="#fff" />
			</Head>
			<nav>
				<Navigation />
			</nav>
			<main>{children}</main>
		</div>
	)
}
