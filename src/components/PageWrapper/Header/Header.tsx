import React from 'react'
import {NavLinks} from '../NavLinks'
import styles from './header.module.scss'

type Props = Record<never, never>

const Header: React.FC<Props> = ( ) => (
	<header className={styles.header}>
		{/* Navigation Items */}
		<nav>
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
