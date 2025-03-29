import NextImage from 'next/image'
import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	FC,
	JSX,
} from 'react'

type BaseElementType
= FC<JSX.IntrinsicElements['img']>

type SmartImageProps
= ComponentPropsWithoutRef<BaseElementType>
& Pick<ComponentProps<typeof NextImage>, 'placeholder'>

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
SmartImage
----------
This takes in HTML Image Attributes, and (if necessary) will
	convert them into other types for use with Next Images.
The motivation behind this was for its usage with Rehype.
This can help transform external HTML into localized JSX.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const SmartImage: FC<SmartImageProps> = ({
	src,
	alt,
	height,
	width,
	placeholder,
	...props
}) => {
	// The src and alt attributes must be set in Next Images.
	// Its with good reason, but our source may not have them.
	// For example an img without an alt is still valid HTML.
	src ??= ''
	alt ??= ''

	// The height and width cannot be non-numeric strings.
	// Converting them to a number ensures they are numeric.
	if (height != null) height = Number(height)
	if (width != null) width = Number(width)

	// Verify that the placeholder attribute is properly set.
	if (placeholder !== 'blur' && placeholder !== 'empty') placeholder = undefined

	// Return the NextJS Image.
	return (
		<NextImage
			{...props}
			src = {src}
			alt = {alt}
			height = {height}
			width = {width}
			placeholder = {placeholder}
		/>
	)
}

export {SmartImage}
