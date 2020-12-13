import { BlogPosting } from "schema-dts"
import { jsonLdScriptProps } from "react-schemaorg"
import config from "../../lib/config"
import { formatISO } from "date-fns"
import Head from "next/head"

type Props = {
	url: string
	title: string
	keywords?: string[]
	date: Date
	author?: string
	image?: string
	description?: string
}

const { base_url, site_image, site_keywords } = config


export default function JsonLdMeta({
	url,
	title,
	keywords,
	date,
	author,
	image,
	description,
}: Props) {
	return (
		<Head>
			<script
				{...jsonLdScriptProps<BlogPosting>({
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					mainEntityOfPage: base_url + url,
					headline: title,
					keywords: (keywords ? keywords : site_keywords).join(","),
					datePublished: date ? formatISO(date) : formatISO(new Date()),
					author: author,
					image: image ? image : [base_url,site_image].join("/"),
					description: description,
				})}
			/>
		</Head>
	)
}
