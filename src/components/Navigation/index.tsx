import Link from "next/link"
import { useRouter } from "next/router"
import Burger from "../Burger"
import { useState } from "react"
import { useTheme } from "../Context/Theme"
import styles from "./_.module.css"

const {nav, navActive, theme} = styles

export default function Navigation() {
	const [dark, toggle] = useTheme()

	const { pathname, query } = useRouter()
	console.log(pathname, query)
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
							<a className={pathname === "/posts" ? navActive : null}>
								All
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/projects">
							<a className={query?.slug?.[0] === "projects" ? navActive : null}>
								Projects
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/art">
							<a className={query?.slug?.[0] === "art" ? navActive : null}>
								Art
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/tech">
							<a className={query?.slug?.[0] === "tech" ? navActive : null}>
								Tech
							</a>
						</Link>
					</li>
					<li>
						<Link href="/posts/tags/gaming">
							<a className={query?.slug?.[0] === "gaming" ? navActive : null}>
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
