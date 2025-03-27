import type {TextNode} from '@nebuloid-types/text-node'
import type {FC, JSX} from 'react'

type HTMLDefinitionListProps = JSX.IntrinsicElements['dl']

interface Props extends HTMLDefinitionListProps {
	items: Array<[
		terms: Array<TextNode>,
		definitions: Array<TextNode>,
	]>,
}

/* This function presses given "terms" into JSX. */
const getTermsJSX = (
	terms: Array<TextNode>,
) => (
	// There can be one or many synonyms for a specific term.
	terms.map((term) => (
		<dt>{term}</dt>
	))
)


/* This function presses given "definitions" into JSX. */
const getDefinitionsJSX = (
	definitions: Array<TextNode>,
) => (
	// There can be one or many definitions for a specific term.
	definitions.map((definition) => (
		<dd>{definition}</dd>
	))
)

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
Definition List
---------------
This component might seem confusing at first.
However, it merely emulates the behavior of
 the <dl> element, with some additional benefits.
The structure is very well-defined here, which makes things
 like type-checking and styling easier for consumers.
For example, it puts groups of <dd>/<dt> pairings
 into <div>'s for easier styling.

WARNING!
The current naive implementation of this component may be
 a bit slow, and could cause excessive re-renders.

TODO!
To fix this issue, use react state and hooks to help.
It may also be pertinent to fix the div keys for this, too.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const DefinitionList: FC<Props> = ({
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
			<div key = {index}>
				{getTermsJSX(terms)}
				{getDefinitionsJSX(definitions)}
			</div>
		))}
	</dl>
)

export {DefinitionList}
