import {SmartImage} from '@components/SmartImage'
import {SmartLink} from '@components/SmartLink'
import {Fragment} from 'react'
import {rehype} from 'rehype'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import type {Options as RehypeReactOptions} from 'rehype-react'

type Options = Record<never, never>

// React processor settings.
const rehypeReactOptions: RehypeReactOptions = {
	Fragment: Fragment,
	development: false,
	components: {
		a: SmartLink,
		img: SmartImage,
	},
}

// This function takes in valid HTML,
//  and generates dynamic JSX from it with some options.
const generateJSX = async (html: string, options?: Options) => {
	// Convert HTML string into a vFile.
	// Notice, "vFile.result" is of type ReactElement.
	const vFile = await rehype( )
	.use(rehypeParse, {fragment: true})
	.use(rehypeReact, rehypeReactOptions)
	.process(html)

	// Return the processed results.
	return vFile
}

export {generateJSX}
