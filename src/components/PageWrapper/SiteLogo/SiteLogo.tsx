import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './site-logo.module.scss'

const SiteLogo: React.FC = ( ) => (
	<Link href='/'>
		<figure className={styles.logo}>
			<div className={styles['image-container']}>
				<Image
					src='/vercel.ico'
					alt='vercel&apos;s logo'
					width={30}
					height={30}
				/>
			</div>

			<div className={styles['brand-container']}>
				<p className={styles.title}>
					Nebuloid
				</p>
				<p className={styles.description}>
					Blog &amp; Portfolio
				</p>
			</div>
		</figure>
	</Link>
)

export {SiteLogo}
