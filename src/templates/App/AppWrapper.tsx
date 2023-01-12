import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import type {NextPage} from 'next'
import React from 'react'
import {ColorSchemeProvider} from '@contexts/ColorScheme'
import {useColorScheme} from '@hooks/use-color-scheme'

interface Props {
	children: React.ReactNode,
}

const queryClient = new QueryClient( )

const AppWrapper: NextPage<Props> = ({children}) => {
	// Set up global state in the global context.
	const colorSchemeHook = useColorScheme( )

	return (
		<ColorSchemeProvider value={colorSchemeHook}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</ColorSchemeProvider>
	)
}

export {AppWrapper}
