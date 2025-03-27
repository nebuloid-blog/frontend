import {combineClassNames} from '@helpers/combine-class-names'
import Link from 'next/link'
import styles from './SiteLogo.module.scss'
import type {FC} from 'react'

type Props = Record<never, never>

const SiteLogo: FC<Props> = ( ) => (
	<Link
		href = '/'
		className = {
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
