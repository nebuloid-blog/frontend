import {createElement, Fragment} from 'react'
import {rehype} from 'rehype'
import rehypeParse from 'rehype-parse'
import type {Options as RehypeReactOptions} from 'rehype-react'
import rehypeReact from 'rehype-react'
import rehypeSanitize, {defaultSchema} from 'rehype-sanitize'
import rehypeShiftHeading from 'rehype-shift-heading'
import {SmartLink} from '@components/SmartLink'
import {SmartImage} from '@components/SmartImage'

// React processor settings.
const rehypeReactOptions: RehypeReactOptions = {
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
const sanitizerSchema = {
	...defaultSchema,
	attributes: {
		...defaultSchema.attributes,
		'*': [
			...(defaultSchema.attributes?.['*'] ?? [ ]),
			'className',
		],
	},
}

interface Options {
	shift?: number,
}

// This function takes in valid HTML,
//  and transforms it to use certain NextJS tags.
const processHTML = async (
	html: string,
	options?: Options,
) => {
	// Bypass zeroes not being accepted in this method.
	// If the options have a zero, just off the plugin!
	let shiftHeadingOptions
	if (options?.shift == null || options.shift === 0) shiftHeadingOptions = false
	else shiftHeadingOptions = {shift: options.shift}

	// Parse the HTML according using these plugins.
	const vFile = await rehype( )
	.use(rehypeParse, {fragment: true})
	.use(rehypeShiftHeading, shiftHeadingOptions)
	.use(rehypeSanitize, sanitizerSchema)
	.use(rehypeReact, rehypeReactOptions)
	.process(html)

	// Finally, return the processed results.
	return vFile
}

export {processHTML}
