import Link from 'next/link'
import React from 'react'
import styles from './nav-links.module.scss'

type Props = Record<never, never>

const NavLinks: React.FC<Props> = ( ) => (
	<menu className={styles.links} role='list'>
		<li>
			<Link className='reset' href='./'>
				home
			</Link>
		</li>

		<li>
			<Link className='reset' href='./blog'>
				blog
			</Link>
		</li>

		{/* Links to other pages */}
		{/*
			<li>
				<Link className='reset' href='./about'>
					about
				</Link>
			</li>
		*/}
	</menu>
)

export {NavLinks}
