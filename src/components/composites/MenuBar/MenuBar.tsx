import styles from './MenuBar.module.scss'
import type {FC, ReactNode} from 'react'

interface Props {
	children: ReactNode,
	navigation?: boolean,
}

const MenuBar: FC<Props> = ({
	children,
	navigation = false,
}) => {
	if (navigation) {
		return (
			<nav className = {styles.root}>
				<menu>
					{children}
				</menu>
			</nav>
		)
	}

	else {
		return (
			<menu className = {styles.root}>
				{children}
			</menu>
		)
	}
}

export {MenuBar}
