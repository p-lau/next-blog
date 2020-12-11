import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import markdownToHtml from '../../lib/convert-markdown'
import Post, {Props} from "../../components/Post"
import {getAllPostContent, getPostBySlug} from '../../lib/posts'

export default function Slug({ post }: { post: Props }){
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return router.isFallback ?
		<h1>Loading…</h1> : <Post {...post}/>
}

type Params = {
	params: {
		slug: string
	}
}

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'description',
		'slug',
		'tags',
		'author',
		'content',
		'preview',
	])
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content,
			}
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllPostContent()

	return {
		paths: posts.map((posts) => {
			return {
				params: {
					slug: posts.slug,
				},
			}
		}),
		fallback: false,
	}
}