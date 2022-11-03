import type {NextPage} from 'next'
import React from 'react'

interface AppWrapperProps {
	children: React.ReactNode,
}

const AppWrapper: NextPage<AppWrapperProps> = ({children}) => (
	<>
		{children}
	</>
)

export {AppWrapper}
