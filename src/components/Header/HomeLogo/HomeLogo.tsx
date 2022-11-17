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
				width={30}
				height={30}
			/>
		</span>

		<hgroup className={styles.website}>
			<h1>Nebuloid</h1>
			<p>Blog &amp; Portfolio</p>
		</hgroup>
	</Link>
)

export {HomeLogo}
