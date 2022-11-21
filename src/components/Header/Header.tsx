import React from 'react'
import {NavLinks} from './NavLinks'
import {SiteLogo} from './SiteLogo'
import styles from './header.module.scss'

const Header: React.FC = ( ) => (
	<header className={styles.header}>
		{/* Navigation Items */}
		<nav>
			<SiteLogo />
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
