import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './home-logo.module.scss'

const HomeLogo: React.FC = ( ) => (
	<Link href='/' className={styles.home}>
		<span className={styles.logo}>
			<Image
				src='/vercel.ico'
				alt='vercel&apos;s logo'
				width={56}
				height={56}
			/>
		</span>
		<h1>Nebuloid</h1>
	</Link>
)

export {HomeLogo}
