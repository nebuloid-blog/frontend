import Link from 'next/link'
import React, {useCallback, useMemo} from 'react'
import styles from './Header.module.scss'
import {ColorSchemeContext} from '@contexts/ColorScheme'
import type {ColorScheme} from '@hooks/use-color-scheme'
import {useSafeContext} from '@hooks/use-safe-context'

type Props = Record<never, never>

const Header: React.FC<Props> = ( ) => {
	// Here, we can toggle the color scheme's global state.
	// Without its usage outside of this component, it has
	//  zero implications for CSS stylings.
	const [colorScheme, setColorScheme] = useSafeContext(ColorSchemeContext)

	const nextColorScheme = useMemo(( ): ColorScheme => {
		if (colorScheme === 'dark') return 'light'
		else if (colorScheme === 'light') return 'system'
		else return 'dark'
	}, [colorScheme])

	const getReadableColor = useCallback((color: ColorScheme) => {
		if (color === 'dark') return 'dark mode'
		else if (color === 'light') return 'light mode'
		else return 'system theme'
	}, [ ])

	return (
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

			{/* Site Settings */}
			<div>
				<menu>
					<li>
						<button
							className='reset'
							onClick={( ) => {
								setColorScheme(nextColorScheme)
							}}
						>
							Use {getReadableColor(nextColorScheme)}
						</button>
					</li>
				</menu>
			</div>

			{/* Authentication Options */}
			{/*
				Sign In / Register
				Sign Out / View Profile
				...
			*/}
		</header>
	)
}

export {Header}
