import React from 'react'
import type {TextNode} from '@nebuloid-types/text-node'

type DefinitionNode = TextNode | Array<TextNode>
type HTMLDefinitionListProps = JSX.IntrinsicElements['dl']

interface Props extends HTMLDefinitionListProps {
	items: Array<[
		// Terms are inline, and are not wrapped in a <p> tag.
		// They do get wrapped in a block-oriented <dd> though.
		// There can be one or more synonyms for a term or word,
		//  so there can be multiple terms for a single idea.
		terms: TextNode | Array<TextNode>,

		// Definitions are a collection of one or more <p> tags.
		// There can be one or more paragraphs for a definition,
		//  and there can be one or more definitions for a term.
		definitions: DefinitionNode | Array<DefinitionNode>,
	]>,
}

const getTermsJSX = (
	terms: TextNode | Array<TextNode>,
) => {
	// There can be one or many synonyms for a specific term.
	terms = Array.isArray(terms) ? terms : [terms]
	return terms.map((term) => (
		<dt>{term}</dt>
	))
}

const getDefinitionsJSX = (
	definitions: DefinitionNode | Array<DefinitionNode>,
) => {
	// There can be one or many definitions for a specific term.
	definitions = Array.isArray(definitions) ? definitions : [definitions]
	return definitions.map((definition) => (
		<dd>{definition}</dd>
	))
}

const DefinitionList: React.FC<Props> = ({
	items,
}) => (
	<dl>
		{items.map(([terms, definitions], index) => (
			// NOTE:
			// Each definition group can have one or more terms,
			//  which get defined by one or more definitions.
			//
			// There can be several different synonyms for a
			//  single word or term.
			// Likewise, there can be several different meanings
			//  for a single word or term.
			//
			// There isn't a specific definition group element,
			//  so you will notice that a <div> is used here.
			<div key={index}>
				{getTermsJSX(terms)}
				{getDefinitionsJSX(definitions)}
			</div>
		))}
	</dl>
)

export {DefinitionList}
