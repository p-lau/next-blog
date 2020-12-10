import Link from "next/link"
import { TagContent } from "../../lib/tags"
import styles from "./_.module.css"

type Props = {
	tag: TagContent
}

export default function TagButton({ tag }: Props) {
	return (
		<>
			<Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
				<a className={styles.tag}>{tag.name}</a>
			</Link>
		</>
	);
}
