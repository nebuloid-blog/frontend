import React from 'react'
import type {TextNode} from '@nebuloid-types/text-node'

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
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		{...props as Record<string, unknown>}
	>
		{items.map((item, index) => (
			<li key={index}>
				{item}
			</li>
		))}
	</ListElement>
)

export {BulletedList}
