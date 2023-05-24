import {useEffect, useState} from 'react'

const useTitleVisibility = ( ) => {
	const [showTitle, setShowTitle] = useState(true)
	const [showLogo, setShowLogo] = useState(false)

	useEffect(( ) => {
		const handleScroll = ( ) => {
			const {scrollY, innerHeight} = window
			const thresholdFlag = scrollY / innerHeight > 0.33
			setShowTitle(thresholdFlag)
			setShowLogo(thresholdFlag)
		}

		// Trigger this once immediately,
		//  to overwrite initial state.
		handleScroll( )

		window.addEventListener('scroll', handleScroll)
		return ( ) => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [ ])

	return {showTitle, showLogo}
}

export {useTitleVisibility}
