import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './SiteLogo.module.scss'
import {combineClassNames} from '@utilities/combine-class-names'

type Props = Record<never, never>

const SiteLogo: React.FC<Props> = ( ) => (
	<Link className='reset' href='/'>
		<figure className={styles.logo}>
			<div className={
				combineClassNames([
					styles['image-container'],
					'invert-in-dark-mode',
				])
			}>
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
