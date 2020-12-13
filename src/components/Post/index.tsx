import DisplayDate from "../Date"
import styles from "../../../public/styles/content.module.css"
import Author from "../Author"
import Copyright from "../Copyright"
import Layout from "../Layout"
import Meta from "../meta"
import SocialList from "../Social/List"
import TagButton from "../Tag/Button"
import { getAuthor } from "../../lib/authors"
import { getTag } from "../../lib/tags"

export type Props = {
	title: string
	date: Date
	slug: string
	description: string
	tags: string[]
	preview: string
	author: string
	content: string
}

export default function Post({
	title,
	date,
	slug,
	author,
	tags,
	preview,
	description,
	content
}: Props){
	const keywords = tags.map((it) => getTag(it).name)
	const ISODate = new Date(date)
	const authorName = getAuthor(author).name
	return (
		<Layout>
			<Meta
				url={`posts/${slug}`}
				title={title}
				keywords={keywords}
				date={ISODate}
				author={authorName}
				image={preview}
				description={description}
			/>
			<div className={styles.container}>
				<article>
					<header>
						<h1 className={styles.title}>{title}</h1>
						<div className={styles.metadata}>
							<div>
								<DisplayDate date={ISODate} />
							</div>
							<div>
								<Author author={getAuthor(author)} />
							</div>
						</div>
					</header>
					<div className={styles.content} dangerouslySetInnerHTML={{__html: content}}/>
					<ul className={styles.tagList}>
						{tags.map((it, i) => (
							<li key={i}>
								<TagButton tag={getTag(it)} />
							</li>
						))}
					</ul>
				</article>
				<footer>
					<div className={styles.socialList}>
						<SocialList />
					</div>
					<Copyright />
				</footer>
			</div>
		</Layout>
	)
}