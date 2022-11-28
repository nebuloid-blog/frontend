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
