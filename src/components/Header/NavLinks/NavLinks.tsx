import Link from 'next/link'
import React from 'react'
import styles from './nav-links.module.scss'

const NavLinks: React.FC = ( ) => (
	<ul className={styles.links} role='list'>
		<li>
			<Link href='./'>
				<p>
					home
				</p>
			</Link>
		</li>

		{/* Links to other pages */}
		{/*
			<li>
				<Link href='./blog'>
					<p>
						blog
					</p>
				</Link>
			</li>

			<li>
				<Link href='./about'>
					<p>
						about
					</p>
				</Link>
			</li>
		*/}
	</ul>
)

export {NavLinks}
