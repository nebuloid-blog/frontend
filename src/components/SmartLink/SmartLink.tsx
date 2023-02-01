import type {LinkProps as BaseLinkProps} from 'next/link'
import Link from 'next/link'

// Checks if the string starts with "#", "/", or "./".
// Useful for checking whether an href is relative.
const expression = new RegExp('^(?:.?/|#)', 'u')

// HTML Anchor element props: <a>
type BaseAnchorProps = JSX.IntrinsicElements['a']
type AnchorProps = Omit<BaseAnchorProps, 'ref'>

// NextJS Link element props: <Link>
interface LinkProps extends BaseLinkProps {
	href: string,
}

// You may notice that we omitted the "ref" attribute,
//  and removed the "UrlObject" type from "href".
// It is doubtful that such complex logic will be needed,
//  and this keeps the types consistent for react-rehype.
type Props = AnchorProps | LinkProps

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
SmartLink
---------
This takes in HTML Link Attributes, and will decide whether
	to give back an HTML Anchor or a Next Link based on them.
The motivation behind this was for its usage with Rehype.
This can help transform external HTML into localized JSX.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const SmartLink: React.FC<Props> = ({href, ...props}) => {
	const hrefIsRelative = (
		href != null
		&& expression.test(href)
	)

	if (hrefIsRelative) return (<Link href={href} {...props} />)
	else return <a href={href} {...props} />
}

export {SmartLink}
