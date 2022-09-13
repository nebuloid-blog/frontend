import styles from '../../styles/Home.module.css'

interface CardProps {
	href: string,
	title: string,
	description: string,
}

const Card = (props: CardProps) => (
	<a
		href={props.href}
		className={styles.card}
	>
		<h2>{props.title}</h2>
		<p>{props.description}</p>
	</a>
)

export {Card}
