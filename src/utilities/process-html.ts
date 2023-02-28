import {rehype} from 'rehype'
import rehypeParse from 'rehype-parse'
import rehypeSanitize, {defaultSchema} from 'rehype-sanitize'
import rehypeShiftHeading from 'rehype-shift-heading'

interface Options {
	shift?: number,
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

// This function takes in valid HTML,
//  and transforms / sanitizes it for use as static data.
const processHTML = async (
	html: string,
	options?: Options,
) => {
	// Bypass zeroes not being accepted in this method.
	// If the options have a zero, just off the plugin!
	let shiftHeadingOptions
	if (options?.shift == null || options.shift === 0) shiftHeadingOptions = false
	else shiftHeadingOptions = {shift: options.shift}

	// Parse the HTML using these plugins, and create a vFile.
	// Note that "vFile.toString( )" produces a static string.
	const vFile = await rehype( )
	.use(rehypeParse, {fragment: true})
	.use(rehypeShiftHeading, shiftHeadingOptions)
	.use(rehypeSanitize, sanitizerSchema)
	.process(html)

	// Return the processed results.
	return vFile
}

export {processHTML}
