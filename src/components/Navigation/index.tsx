import Link from "next/link"
import { useRouter } from "next/router"
import Burger from "../Burger"
import { useState } from "react"
import { useTheme } from "../Context/Theme"
import styles from "./_.module.css"

const {nav, navActive, theme} = styles

export default function Navigation() {
	const [dark, toggle] = useTheme()

	const { pathname } = useRouter()
	const [active, setActive] = useState(false);
	return (
		<>
			<Burger active={active} onClick={() => setActive(!active)} />
			<div className={`${[nav, active ? navActive : ""].join(" ")}`}>
				<ul>
					<li>
						<Link href="/">
							<a className={pathname === "/" ? navActive : null}>Panhavuth Lau</a>
						</Link>
					</li>
					<li>
						<Link href="/posts">
							<a
								className={
									pathname.startsWith("/posts") ? navActive : null
								}
							>
								Blog
							</a>
						</Link>
					</li>
					<li>
						<a className={theme} onClick={() => toggle()}>{dark ? "🌙" : "🌞"}</a>
					</li>
				</ul>
			</div>
		</>
	)
}
