import Head from "next/head"
import config from "../../lib/config"

type Props = {
	url: string
	title?: string
	description?: string
	image?: string
}

const { base_url, site_title, site_image, site_description } = config

export default function OpenGraphMeta({
	url,
	title,
	description,
	image,
}: Props) {

	return (
		<Head>
			<meta property="og:site_name" content={site_title} />
			<meta property="og:url" content={base_url + url} />
			<meta
				property="og:title"
				content={title ? [title, site_title].join(" | ") : site_title}
			/>
			<meta
				property="og:description"
				content={description ? description : site_description}
			/>
			<meta
				property="og:image"
				content={image ? image : [base_url,site_image].join("/")}
			/>
			<meta property="og:type" content="article" key="type"/>
		</Head>
	)
}
