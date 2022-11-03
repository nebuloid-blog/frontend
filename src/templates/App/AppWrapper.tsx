import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import type {NextPage} from 'next'
import React from 'react'

interface AppWrapperProps {
	children: React.ReactNode,
}

const queryClient = new QueryClient( )

const AppWrapper: NextPage<AppWrapperProps> = ({children}) => (
	<QueryClientProvider client={queryClient}>
		{children}
	</QueryClientProvider>
)

export {AppWrapper}
