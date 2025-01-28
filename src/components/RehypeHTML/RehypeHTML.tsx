import {generateJSX} from '@utilities/generate-jsx'
import {useEffect, useState} from 'react'
import type {FC} from 'react'

interface Props {
	html: string,
}

const RehypeHTML: FC<Props> = ({html}) => {
	// This static HTML should already be sanitized
	//  with the "processHTML" utility function.
	const [Content, setContent] = useState(
		<div dangerouslySetInnerHTML = {{__html: html}} />,
	)

	// This will replace static HTML tags
	//  with dynamic NextJS components, where applicable.
	useEffect(( ) => {
		// The only way we can use async operators in useEffect
		//  is to use an IIFE or a helper function.
		const loadContent = async ( ) => {
			const vFile = await generateJSX(html)
			setContent(vFile.result)
		}

		void loadContent( )
	}, [html])

	// If its done, the Rehyped JSX is now ready to serve!
	// Otherwise it returns temporary static HTML;
	//  this HTML usually only exists for a frame or two.
	// However, its worth noting that SEO picks up
	//  on the static HTML (not the generated JSX).
	return <>{Content}</>
}

export {RehypeHTML}
