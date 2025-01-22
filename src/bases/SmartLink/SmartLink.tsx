import NextLink from 'next/link'
import type {LinkProps as NextLinkProps} from 'next/link'
import type {ComponentPropsWithoutRef, FC, JSX} from 'react'

// Checks if the string starts with "#", "/", or "./".
// Useful for checking whether an href is relative.
const expression = new RegExp('^(?:.?/|#)', 'u')
const hrefIsRelative = (href: string) => expression.test(href)

// We can only infer a base type of <a> or <NextLink>.
type BaseElementType
= FC<JSX.IntrinsicElements['a']> | FC<NextLinkProps>

// Base custom props for the component.
interface SmartLinkBase {
	href?: string, // Can't be a complex NextJS Url type.
}

// Combine inferred component props with the base props.
type SmartLinkProps
= SmartLinkBase & ComponentPropsWithoutRef<BaseElementType>

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
SmartLink
---------
This takes in HTML Link Attributes, and will decide whether
	to give back an HTML Anchor or a Next Link based on them.
The motivation behind this was for its usage with Rehype.
This can help transform external HTML into localized JSX.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const SmartLink: FC<SmartLinkProps> = (props) => {
	// If the given link is empty, or if it has an external
	//  link destination, then we must use an anchor element.
	if (props.href == null || !hrefIsRelative(props.href)) {
		return (
			<a {...props} />
		)
	}

	// Else, we must certainly have an internal link target.
	else {
		return (
			<NextLink
				{...props}
				href = {props.href}
			/>
		)
	}
}

export {SmartLink}
export type {SmartLinkProps}
