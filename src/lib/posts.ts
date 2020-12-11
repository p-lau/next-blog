import fs from "fs"
import matter from "gray-matter"
import {join} from "path"
import yaml from "js-yaml"

const postsDirectory = join(process.cwd(), "posts")

export type PostContent = {
	readonly date: string
	readonly title: string
	readonly slug: string
	readonly tags?: string[]
}

let postCache: PostContent[]

export function getAllPostContent(): PostContent[] {
	if (postCache) {
		return postCache
	}
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames
		.filter((it) => it.endsWith(".md"))
		.map((fileName) => {
			// Read markdown file as string
			const fullPath = join(postsDirectory, fileName)
			const fileContents = fs.readFileSync(fullPath, "utf8")

			// Use gray-matter to parse the post metadata section
			const matterResult = matter(fileContents, {
				engines: {
					yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
				},
			});
			const matterData = matterResult.data as {
				date: string
				title: string
				tags: string[]
				slug: string
			}
			const slug = fileName.replace(/\.md$/, "")

			// Validate slug string
			if (matterData.slug !== slug) {
				throw new Error(
					"slug field not match with the path of its content source"
				)
			}

			return matterData
		})
	// Sort posts by date
	postCache = allPostsData.sort((a, b) => (a.date < b.date) ? 1 : -1)
	return postCache
}

export function getPostBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, '')
	const fullPath = join(postsDirectory, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents, {
		engines: {
			yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
		},
	})

	type Items = {
		[key: string]: string
	}

	const items: Items = {}

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug
		}
		if (field === 'content') {
			items[field] = content
		}
		if (data[field]) {
			items[field] = data[field]
		}
	})
	return items
}

export function countPosts(tag?: string): number {
	return getAllPostContent().filter(
		(it) => !tag || (it.tags && it.tags.includes(tag))
	).length
}

export function listPostContent(
	page: number,
	limit: number,
	tag?: string
): PostContent[] {
	return getAllPostContent()
		.filter((it) => !tag || (it.tags && it.tags.includes(tag)))
		.slice((page - 1) * limit, page * limit)
}