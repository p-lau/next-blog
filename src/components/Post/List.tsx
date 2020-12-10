import React from "react"
import { PostContent } from "../../lib/posts"
import PostItem from "../Post/Item"
import TagLink from "../Tag/Link"
import Pagination from "../Pagination"
import { TagContent } from "../../lib/tags"
import styles from "./_.module.css"

type Props = {
	list: PostContent[]
	tags: TagContent[]
	pagination: {
		current: number
		pages: number
	}
}
const {post, posts, postList, categories} = styles
export default function PostList({ list, tags, pagination }: Props) {
	return (
		<div className={post}>
			<div className={posts}>
				<ul className={postList}>
					{list.map((item, i) => (
						<li key={i}>
							<PostItem post={item} />
						</li>
					))}
				</ul>
				<Pagination
					current={pagination.current}
					pages={pagination.pages}
					link={{
						href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
						as: (page) => (page === 1 ? null : "/posts/page/" + page),
					}}
				/>
			</div>
			<ul className={categories}>
				{tags.map((it, i) => (
					<li key={i}>
						<TagLink tag={it} />
					</li>
				))}
			</ul>
		</div>
	)
}
