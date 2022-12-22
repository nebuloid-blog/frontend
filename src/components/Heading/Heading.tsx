import React from 'react'
import type {TextNode} from '@nebuloid-types/text-node'

type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
type HTMLHeadingGroupProps = JSX.IntrinsicElements['hgroup']

interface Props extends HTMLHeadingGroupProps {
	children: TextNode,
	subheading?: TextNode,
	level?: number,
}

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
Dynamic Heading
---------------
You may wonder how a heading component could be useful.
The standard <h1>-through-<h6> elements should do wonders?
Well that's true, but sometimes you want to one-up the
 current heading level, without being stuck.
If your component used an <h3>, but you needed an <h4>,
 then this Dynamic Heading would have come in handy.
This also allows for a subheading more easily, grouping
 a <p>-tag up with an <hgroup>-tag.

FUTURE!
Using aria-roles, it actually is possible for this component
 to generate h7's and beyond, by manipulating <p> tags.
However, its not entirely clear how helpful this would be.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const Heading: React.FC<Props> = ({
	children: heading,
	subheading,
	level = 1,
	...rest
}) => {
	// Step 1: Generate a heading from the level.
	let DynamicHeading: HeadingElementType
	if (level === 1) {
		DynamicHeading = 'h1'
	}
	else if (level === 2) {
		DynamicHeading = 'h2'
	}
	else if (level === 3) {
		DynamicHeading = 'h3'
	}
	else if (level === 4) {
		DynamicHeading = 'h4'
	}
	else if (level === 5) {
		DynamicHeading = 'h5'
	}
	else if (level === 6) {
		DynamicHeading = 'h6'
	}
	else if (level < 1) {
		throw new Error(
			'The Heading component can\'t generate headings less than <h1>!',
		)
	}
	else if (level > 6) {
		throw new Error(
			'The Heading component can\'t generate headings greater than <h6>!',
		)
	}
	else {
		throw new Error(
			'The Heading component can\'t generate fractional-level headings!',
		)
	}

	// Step 2: Compile JSX and return.
	return (
		<hgroup {...rest}>
			<DynamicHeading>
				{heading}
			</DynamicHeading>
			{subheading != null && (
				<p>
					{subheading}
				</p>
			)}
		</hgroup>
	)
}

export {Heading}
