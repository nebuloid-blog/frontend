import {FC, ReactNode, useEffect, useState} from 'react'

interface Props {
	children: ReactNode,
}

const AwaitMount: FC<Props> = ({children}) => {
	const [mounted, setMounted] = useState(false)

	// The component will not render until it is mounted.
	// This is useful for components that rely on the DOM.
	useEffect(( ) => {
		setMounted(true)
	}, [ ])

	if (!mounted) return null
	else return <>{children}</>
}

export {AwaitMount}
