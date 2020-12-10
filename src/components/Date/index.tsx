import styles from "./_.module.css"
import { format, formatISO } from "date-fns"

type Props = {
	date: Date
}

export default function Date({ date }: Props) {
	return (
		<time dateTime={formatISO(date)}>
			<span className={styles.date}>{format(date, "LLLL d, yyyy")}</span>
		</time>
	)
}
