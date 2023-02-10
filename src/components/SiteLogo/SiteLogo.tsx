import Link from 'next/link'
import React from 'react'
import styles from './SiteLogo.module.scss'
import {combineClassNames} from '@utilities/combine-class-names'

type Props = Record<never, never>

const SiteLogo: React.FC<Props> = ( ) => (
	<Link
		href='/'
		className={
			combineClassNames([
				'reset',
				'heading',
				styles.logo,
			])
		}
	>
		<p>Nebuloid</p>
	</Link>
)

export {SiteLogo}
