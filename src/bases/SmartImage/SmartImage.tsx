import type {ImageProps as BaseNextImageProps} from 'next/image'
import Image from 'next/image'

// HTML Image element props: <img>
type BaseHTMLImageProps = JSX.IntrinsicElements['img']
type HTMLImageProps = Omit<BaseHTMLImageProps, 'ref'>

// NextJS Image element props: <Image>
interface NextImageProps extends Omit<BaseNextImageProps, 'ref'> {
	src: string,
}

type Props = HTMLImageProps | NextImageProps

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
SmartImage
----------
This takes in HTML Image Attributes, and (if necessary) will
	convert them into other types for use with Next Images.
The motivation behind this was for its usage with Rehype.
This can help transform external HTML into localized JSX.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const SmartImage: React.FC<Props> = ({
	src,
	alt,
	height,
	width,
	placeholder,
	...props
}) => {
	// The src and alt attributes must be set in Next Images.
	if (src == null) src = ''
	if (alt == null) alt = ''

	// The height and width cannot be non-numeric strings.
	// Converting them to a number ensures they are numeric.
	if (height != null) height = Number(height)
	if (width != null) width = Number(width)

	// Verify that the placeholder attribute is properly set.
	if (
		placeholder != null
		&& placeholder !== 'blur'
		&& placeholder !== 'empty'
	) placeholder = undefined

	// Return the NextJS Image.
	return (
		<Image
			src={src}
			alt={alt}
			height={height}
			width={width}
			placeholder={placeholder}
			{...props}
		/>
	)
}

export {SmartImage}
