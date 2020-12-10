import styles from "./_.module.css"

type Props = {
	active: boolean
	onClick: () => void
}

const { burger, burgerActive, meat, meat1, meat2, meat3 } = styles

export default function Burger({ active, onClick }: Props) {
	return (
		<div className={`${[burger, active ? burgerActive : ""].join(" ")}`} onClick={onClick}>
			<div className={`${[meat, meat1].join(" ")}`} />
			<div className={`${[meat, meat2].join(" ")}`} />
			<div className={`${[meat, meat3].join(" ")}`} />
		</div>
	)
}
