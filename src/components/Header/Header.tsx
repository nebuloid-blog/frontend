import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'

const Header = ( ) => (
	<header className={styles.header}>
		<nav>
			{/* Logo */}
			<Link href='/'>
				<a>
					<span className={styles.logo}>
						<Image
							src='/vercel.ico'
							alt='vercel&apos;s logo'
							width={256}
							height={256}
						/>
					</span>
					<h1>NextJS Website</h1>
				</a>
			</Link>

			{/* Navigation Buttons */}
			{/*
				Portfolio
				Blog posts
				...
			*/}
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
