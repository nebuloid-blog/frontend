import styles from './MenuBar.module.scss'

interface Props {
	children: React.ReactNode,
	navigation?: boolean,
}

const MenuBar: React.FC<Props> = ({
	children,
	navigation = false,
}) => {
	if (navigation) {
		return (
			<nav className={styles.root}>
				<menu>
					{children}
				</menu>
			</nav>
		)
	}

	else {
		return (
			<menu className={styles.root}>
				{children}
			</menu>
		)
	}
}

export {MenuBar}
