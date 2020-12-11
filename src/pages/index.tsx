import Layout from "../components/Layout"
import Meta from "../components/meta"
import List from "../components/Social/List"
import styles from "./home.module.css"

const { container, handle, fancy } = styles
export default function Index() {
	return (
		<Layout>
			<Meta url={"/"} />
			<div className={container}>
				<div>
					<h1>
						Hi, I'm Panhavuth (Panha) Lau<span className={fancy}>.</span>
					</h1>
					<span className={handle}>@plau.dev</span>
					<h2>I'm an artist, programmer, and gamer.</h2>
					<List />
				</div>
			</div>
		</Layout>
	);
}
