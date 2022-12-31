import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './site-logo.module.scss'
import {combineClassNames} from '@utilities/combine-class-names'

type Props = Record<never, never>

const SiteLogo: React.FC<Props> = ( ) => (
	<Link className='reset' href='/'>
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
				<p className={
					combineClassNames([
						'heading',
						styles.title,
					])
				}>
					Nebuloid
				</p>
			</div>
		</figure>
	</Link>
)

export {SiteLogo}
