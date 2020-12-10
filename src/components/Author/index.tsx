import { AuthorContent } from "../../lib/authors"
import styles from './_.module.css'

type Props = {
	author: AuthorContent
}

export default function Author({ author }: Props) {return <span className={styles.author}>{author.name}</span>}