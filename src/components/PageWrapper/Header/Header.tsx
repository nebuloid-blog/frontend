'use client'

import {MenuBar, MenuButton} from '@components/MenuBar'
import {ColorSchemeContext} from '@contexts/ColorScheme'
import {useSafeContext} from '@hooks/use-safe-context'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useCallback, useMemo} from 'react'
import styles from './Header.module.scss'
import type {ColorScheme} from '@hooks/use-color-scheme'
import type {FC} from 'react'

type Props = Record<never, never>

const Header: FC<Props> = ( ) => {
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
	const pathname = usePathname( )
	const basePath = useMemo(( ) => {
		let basePath = pathname.split('/').at(1) ?? ''
		if (basePath.startsWith('#')) basePath = ''
		return `/${basePath}`
	}, [pathname])

	return (
		<header className = {styles.root}>
			{/* NavBar / Navigation Items */}
			<MenuBar navigation>
				<MenuButton
					base = {Link}
					href = {basePath === '/' ? '/#site-logo' : '/'}
					highlight = {basePath === '/'}
				>
					Home
				</MenuButton>

				<MenuButton
					base = {Link}
					href = '/blog'
					highlight = {basePath === '/blog'}
				>
					Blog
				</MenuButton>
			</MenuBar>

			{/* Spacer Bar */}
			<hr />

			{/* Site Settings */}
			<MenuBar>
				<MenuButton
					onClick = {( ) => {
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
