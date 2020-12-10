import { generatePagination } from "../../lib/pagination"
import Link from "next/link"
import styles from "./_.module.css"

type Props = {
	current: number
	pages: number
	link: {
		href: (page: number) => string
		as: (page: number) => string
	}
}

const {pag, pagActive} = styles

export default function Pagination({ current, pages, link }: Props) {
	const pagination = generatePagination(current, pages)
	return (
		<ul className={pag}>
			{pagination.map(({excerpt, page}, i) => (
				<li key={i}>
					{excerpt ? (
						"..."
					) : (
						<Link href={link.href(page)} as={link.as(page)}>
							<a className={page === current ? pagActive : null}>{page}</a>
						</Link>
					)}
				</li>
			))}
		</ul>
	)
}