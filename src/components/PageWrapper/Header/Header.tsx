import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'

type Props = Record<never, never>

const Header: React.FC<Props> = ( ) => (
	<header className={styles.header}>
		{/* Navigation Items */}
		<nav>
			<menu>
				<li>
					<Link
						href='/'
						className='reset'
					>
						Home
					</Link>
				</li>

				<li>
					<Link
						href='/blog'
						className='reset'
					>
						Blog
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
