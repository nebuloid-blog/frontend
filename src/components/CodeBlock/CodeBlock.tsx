import React from 'react'
import type {TextNode} from '@nebuloid-types/text-node'

type Props =
& {children: TextNode}
& (
	| {
		filename: string,
		filetype?: string,
	}
	| {
		filename?: undefined,
		filetype: string,
	}
)

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
Code Block
----------
This component leverages base HTML5 elements to create
 a well-defined system for marking up code blocks.
The code has an extension and/or or filename prop,
 which could help with colorization later, if desired.

FUTURE!
Consider markup with certain other elements,
 like <mark>, <ins>, and <del>.

FUTURE!
Maybe colorization would be an easy-ish implementation,
 if we leveraged an external npm library?

/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const CodeBlock: React.FC<Props> = ({
	children,
	filename,
	filetype,
}) => (
	<figure>
		{(filetype != null || filename != null) && (
			<figcaption>
				{filename != null ? filename : filetype}
			</figcaption>
		)}

		<pre>
			<code>
				{children}
			</code>
		</pre>
	</figure>
)


export {CodeBlock}
