import React, {useCallback, useMemo} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './Header.module.scss'
import {ColorSchemeContext} from '@contexts/ColorScheme'
import {useSafeContext} from '@hooks/use-safe-context'
import {MenuBar, MenuButton} from '@components/MenuBar'
import type {ColorScheme} from '@hooks/use-color-scheme'

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

	// For checking current route path.
	const router = useRouter( )
	const basePath = useMemo(( ) => {
		let pathName = router.asPath.split('/').at(1) ?? ''
		if (pathName.startsWith('#')) pathName = ''
		return `/${pathName}`
	}, [router])

	return (
		<header className={styles.root}>
			{/* NavBar / Navigation Items */}
			<MenuBar navigation>
				<MenuButton
					base={Link}
					href={basePath === '/' ? '/#site-logo' : '/'}
					highlight={basePath === '/'}
				>
					Home
				</MenuButton>

				<MenuButton
					base={Link}
					href='/blog'
					highlight={basePath === '/blog'}
				>
					Blog
				</MenuButton>
			</MenuBar>

			{/* Spacer Bar */}
			<hr />

			{/* Site Settings */}
			<MenuBar>
				<MenuButton
					onClick={( ) => {
						setColorScheme(nextColorScheme)
					}}
				>
					Use {getReadableColor(nextColorScheme)}
				</MenuButton>
			</MenuBar>

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
