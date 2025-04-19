// This filter function takes any Type, and removes false and undefined from it.
const isFilled = <Type>(item: Type | false | undefined): item is Type => (
	item !== false && item !== undefined
)

type Params =
| Array<string | false | undefined>
| [Array<string | false | undefined>]

const combineClassNames = (...classNames: Params) => (
	classNames
	.flat(1)
	.filter(isFilled)
	.join(' ')
)

export {combineClassNames}
