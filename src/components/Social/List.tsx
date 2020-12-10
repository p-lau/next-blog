import React from "react"
import Twitter from "../../assets/twitter-alt.svg"
import GitHub from "../../assets/github-alt.svg"
import config from "../../lib/config"
import styles from "./_.module.css"

export default function List(){
	return (
		<div className={styles.social}>
			<a
				title="Twitter"
				href={`https://twitter.com/${config.twitter_account}`}
				target="_blank"
				rel="noopener"
			>
				<Twitter width={24} height={24} fill={"#222"} />
			</a>
			<a
				title="GitHub"
				href={`https://github.com/${config.github_account}`}
				target="_blank"
				rel="noopener"
			>
				<GitHub width={24} height={24} fill={"#222"} />
			</a>
		</div>
	);
}
