import Basic from "./BasicMeta"
import Json from "./JsonLdMeta"
import Open from "./OpenGraphMeta"
import Twitter from "./TwitterCardMeta"

type Props = {
	url?: string
	title?: string
	description?: string
	image?: string
	keywords?: string[]
	author?: string
	date: Date
}

export default function Meta({url, title, description, image, keywords, author, date}: Props){
	return(
		<>
			<Twitter url={url} title={title} description={description}/>
			<Basic url={url} title={title} description={description} author={author} keywords={keywords}/>
			<Open url={url} description={description} title={title} image={image}/>
			<Json url={url} title={title} date={date} image={image} description={description} keywords={keywords} author={author}/>
		</>
	)
}