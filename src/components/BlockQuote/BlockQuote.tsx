import React from 'react'
import type {TextNode} from '@nebuloid-types/text-node'

type HTMLBlockQuoteProps = JSX.IntrinsicElements['blockquote']
type HTMLFigureProps = JSX.IntrinsicElements['figure']

interface Props extends HTMLFigureProps, Pick<HTMLBlockQuoteProps, 'cite'> {
	children: TextNode,
	author?: TextNode,
}

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
Block Quote
-----------
This component creates a blockquote by leveraging certain
 HTML5 components like figure, figcaption, and blockquote.
While this could have been done with regular markup, having
 a well-defined component makes certain tasks easier.
For example, styling and type-checking is more modularized.

When using this component, consider using
 the <cite> and <mark> elements for further markup.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const BlockQuote: React.FC<Props> = ({
	children: quotation,
	author,
	cite,
	...props
}) => (
	<figure {...props}>
		<blockquote cite = {cite}>
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
