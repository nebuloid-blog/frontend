import {createElement, Fragment} from 'react'
import {rehype} from 'rehype'
import rehypeParse from 'rehype-parse'
import type {Options} from 'rehype-react'
import rehypeReact from 'rehype-react'
import rehypeSanitize, {defaultSchema} from 'rehype-sanitize'
import {SmartLink} from '@components/SmartLink'
import {SmartImage} from '@components/SmartImage'

// React processor settings.
const options: Options = {
	createElement: createElement,
	Fragment: Fragment,
	components: {
		a: SmartLink,
		img: SmartImage,
	},
}

// This schema declares that class names shall not
//  be sanitized from the HTML.
//
// QUESTION:
// Is this a bad idea, are there bad class names?
// If so, is there a way to sanitize only them away?
const schema = {
	...defaultSchema,
	attributes: {
		...defaultSchema.attributes,
		'*': [
			...(defaultSchema.attributes?.['*'] ?? [ ]),
			'className',
		],
	},
}

// This function takes in valid HTML,
//  and transforms it to use certain NextJS tags.
const processHTML = async (html: string) => {
	// Parse the HTML according using these plugins.
	const vFile = await rehype( )
	.use(rehypeParse, {fragment: true})
	.use(rehypeSanitize, schema)
	.use(rehypeReact, options)
	.process(html)

	// Finally, return the processed results.
	return vFile
}

export {processHTML}
