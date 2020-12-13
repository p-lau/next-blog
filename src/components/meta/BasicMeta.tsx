import Head from "next/head"
import config from "../../lib/config"

const { site_title, site_description, site_keywords, base_url } = config

type Props = {
	title?: string
	description?: string
	keywords?: string[]
	author?: string
	url: string
}

export default function BasicMeta({
	title,
	description,
	keywords,
	author,
	url,
}: Props) {
	return (
		<Head>
			<title>
				{title ? [title, site_title].join(" | ") : site_title}
			</title>
			<meta
				name="description"
				content={description ? description : site_description}
			/>
			<meta
				name="keywords"
				content={
					keywords
						? keywords.join(",")
						: site_keywords.join(",")
				}
			/>
			{author ? <meta name="author" content={author} /> : null}
			<link rel="canonical" href={base_url + url} />
		</Head>
	);
}
