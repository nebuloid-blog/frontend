import React from 'react'
import {HomeLogo} from './HomeLogo'
import {NavLinks} from './NavLinks'
import styles from './header.module.scss'

const Header: React.FC = ( ) => (
	<header className={styles.header}>
		{/* Navigation Items */}
		<nav>
			<HomeLogo />
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
