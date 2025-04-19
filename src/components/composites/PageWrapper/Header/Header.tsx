'use client'

import {MenuBar, MenuButton} from '@components/MenuBar'
import {AuthenticationContext} from '@contexts/Authentication'
import {ColorSchemeContext} from '@contexts/ColorScheme'
import {useLogoutUser} from '@hooks/authentication'
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

	// Now we can determine "me" data.
	const {me} = useSafeContext(AuthenticationContext)
	const {logoutUser} = useLogoutUser( )
	const loggedIn = me != null

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
			<MenuBar>
				{loggedIn
					? (
						<>
							<MenuButton onClick = {logoutUser}>
								Sign Out
							</MenuButton>

							<MenuButton
								base = {Link}
								href = '/user-settings'
								highlight = {basePath === '/user-settings'}
							>
								Hello, {me.username}!
							</MenuButton>
						</>
					)
					: (
						<>
							<MenuButton
								base = {Link}
								href = '/sign-in'
								highlight = {basePath === '/sign-in'}
							>
								Sign In
							</MenuButton>

							<MenuButton
								base = {Link}
								href = '/register'
								highlight = {basePath === '/register'}
							>
								Register
							</MenuButton>
						</>
					)}
			</MenuBar>
		</header>
	)
}

export {Header}
