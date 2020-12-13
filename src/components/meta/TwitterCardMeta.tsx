import config from "../../lib/config"
import Head from "next/head"

const { base_url, site_image, twitter_account, site_title, site_description } = config

type Props = {
	url: string
	title?: string
	image?: string
	description?: string
}

export default function TwitterCardMeta({ url, title, description, image }: Props) {
	return (
		<Head>
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:site" content={twitter_account} />
			<meta property="twitter:url" content={base_url + url} />
			<meta
				property="twitter:title"
				content={title ? [title, site_title].join(" | ") : site_title}
			/>
			<meta
				property="twitter:description"
				content={description ? description : site_description}
			/>
			<meta
				property="twitter:image"
				content={image ? image : [base_url, site_image].join("/")}
			/>
		</Head>
	)
}
