'use client'

import {useEffect, useState} from 'react'

const useTitleVisibility = ( ) => {
	const [showTitle, setShowTitle] = useState(true)

	useEffect(( ) => {
		const handleScroll = ( ) => {
			const {scrollY, innerHeight} = window
			const nearPageTop = scrollY / innerHeight <= 0.33
			setShowTitle(nearPageTop)
		}

		// Trigger this once immediately,
		//  to overwrite initial state.
		handleScroll( )

		window.addEventListener('scroll', handleScroll)
		return ( ) => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [ ])

	return {showTitle}
}

export {useTitleVisibility}
