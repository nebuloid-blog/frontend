'use client'

import {AwaitMount} from '@components/AwaitMount'
import {AuthenticationProvider} from '@contexts/Authentication'
import {ColorSchemeProvider} from '@contexts/ColorScheme'
import {useAuthentication} from '@hooks/use-authentication'
import {useColorScheme} from '@hooks/use-color-scheme'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import type {NextPage} from 'next'
import type {FC, ReactNode} from 'react'

interface Props {
	children: ReactNode,
}

const QUERY_CLIENT = new QueryClient( )

const PreMount: FC<Props> = ({children}) => {
	// Set up global state in the global context.
	const colorSchemeHook = useColorScheme( )

	return (
		<ColorSchemeProvider value = {colorSchemeHook}>
			<QueryClientProvider client = {QUERY_CLIENT}>
				{children}
			</QueryClientProvider>
		</ColorSchemeProvider>
	)
}

const PostMount: FC<Props> = ({children}) => {
	// Set up global state in the global context.
	// Authentication requires document cookies, which can't
	//  be used until the component finishes mounting.
	const authenticationHook = useAuthentication( )

	return (
		<AuthenticationProvider value = {authenticationHook}>
			{children}
		</AuthenticationProvider>
	)
}

const AppWrapper: NextPage<Props> = ({children}) => (
	<PreMount>
		<AwaitMount>
			<PostMount>
				{children}
			</PostMount>
		</AwaitMount>
	</PreMount>
)

export {AppWrapper}
