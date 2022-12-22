import Link from 'next/link'
import React from 'react'
import styles from './nav-links.module.scss'

const NavLinks: React.FC = ( ) => (
	<menu className={styles.links} role='list'>
		<li>
			<Link href='./'>
				home
			</Link>
		</li>

		<li>
			<Link href='./blog'>
				blog
			</Link>
		</li>

		{/* Links to other pages */}
		{/*
			<li>
				<Link href='./about'>
					about
				</Link>
			</li>
		*/}
	</menu>
)

export {NavLinks}
