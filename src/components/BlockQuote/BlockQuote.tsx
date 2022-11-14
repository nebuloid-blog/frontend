import React from 'react'
import type {TextNode} from '@nebuloid-types/text-node'

type HTMLBlockQuoteProps = JSX.IntrinsicElements['blockquote']
type HTMLFigureProps = JSX.IntrinsicElements['figure']

interface Props extends HTMLFigureProps, Pick<HTMLBlockQuoteProps, 'cite'> {
	children: TextNode,
	author?: TextNode,
}

const BlockQuote: React.FC<Props> = ({
	children: quotation,
	author,
	cite,
	...props
}) => (
	<figure {...props}>
		<blockquote cite={cite}>
			{quotation}
		</blockquote>

		{author != null && (
			<figcaption>
				{author}
			</figcaption>
		)}
	</figure>
)

export {BlockQuote}
