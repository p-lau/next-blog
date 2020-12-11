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
							<a className={pathname === "/" ? navActive : null}>
								Panhavuth Lau
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts">
							<a className={pathname.endsWith("/posts") ? navActive : null}>
								All
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/projects">
							<a className={pathname.endsWith("/projects") ? navActive : null}>
								Projects
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/art">
							<a className={pathname.endsWith("/art") ? navActive : null}>
								Games
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/tech">
							<a className={pathname.endsWith("/technology") ? navActive : null}>
								Tech
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/gaming">
							<a className={pathname.endsWith("/gaming") ? navActive : null}>
								Games
							</a>
						</Link>
					</li>
					<li>
						<a className={theme} onClick={() => toggle()}>
							{dark ? "🌙" : "🌞"}
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}
