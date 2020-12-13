import Link from "next/link"
import { useRouter } from "next/router"
import Burger from "../Burger"
import { useState } from "react"
import { useTheme } from "../Context/Theme"
import styles from "./_.module.css"

const {nav, navActive, theme} = styles

const paths = {
	"/": "Panhavuth Lau",
	"/posts": "All",
	"/posts/tags/project": "Project",
	"/posts/tags/art": "Art",
	"/posts/tags/tech": "Tech",
	"/posts/tags/gaming": "Gaming"
}

export default function Navigation() {
	const [dark, toggle] = useTheme()
	const { asPath: pathname } = useRouter()
	const [active, setActive] = useState(false)
	return (
		<>
			<Burger active={active} onClick={() => setActive(!active)} />
			<div className={`${[nav, active ? navActive : ""].join(" ")}`}>
				<ul>
					{
						Object.entries(paths).map(([path, title], index) =>
							<li key={index}>
								<Link href={path}>
									<a
										className={pathname === path ? navActive : null}
										onClick={()=>{
											setActive(false)
										}}
									>
										{title}
									</a>
								</Link>
							</li>
						)
					}
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
