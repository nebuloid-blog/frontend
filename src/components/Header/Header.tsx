import {HomeLink} from './HomeLink'
import {NavLinks} from './NavLinks'
import styles from './header.module.scss'

const Header = ( ) => (
	<header className={styles.header}>
		<nav>
			<HomeLink />
			<NavLinks />
		</nav>

		{/* Authentication Options */}
		{/*
			Sign In / Register
			Sign Out / View Profile
			...
		*/}
	</header>
)

export {Header}
