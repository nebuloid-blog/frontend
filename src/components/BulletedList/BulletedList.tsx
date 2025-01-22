import React from 'react'
import type {TextNode} from '@nebuloid-types/text-node'
import type {JSX} from 'react'

type ListNode = TextNode | Array<TextNode>

interface BaseProps {
	items: Array<ListNode>,
}

type HTMLUnorderedListProps = JSX.IntrinsicElements['ul']
type HTMLOrderedListProps = JSX.IntrinsicElements['ol']

type Props = BaseProps & (
	| (HTMLUnorderedListProps & {as: 'ul'})
	| (HTMLOrderedListProps & {as: 'ol'})
)

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
Bulleted List
-------------
This component generates an ordered or unordered list.
It leverages the ul, ol, and li elements, and adds some
 additional type-checking for its children nodes.
The component is structured for modularized styling as well.
Be aware that it is specifically meant for block text,
 and not for sectioning elements like navbars.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const BulletedList: React.FC<Props> = ({
	as: ListElement,
	items,
	...props
}) => (
	<ListElement
		// WARNING!
		// There is a problem that I am encountering with
		//  Polymorphic Components and Discrimitory Unions,
		//  relating to extending Base HTML Attributes.
		// Point is, we shouldn't need to assert this type!
		//
		// TODO!
		// Resolve and delete the type assertion below.
		{...props as Record<string, unknown>}
	>
		{items.map((item, index) => (
			<li key = {index}>
				{item}
			</li>
		))}
	</ListElement>
)

export {BulletedList}
