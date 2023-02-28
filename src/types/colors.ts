type monochrome
= 'black'
| 'dark'
| 'gray'
| 'light'
| 'white'

type rainbow
= 'blue'
| 'indigo'
| 'purple'
| 'pink'
| 'red'
| 'orange'
| 'yellow'
| 'green'
| 'teal'
| 'cyan'

type level
= 'primary'
| 'secondary'
| 'tertiary'

// These values could maybe have better names.
type contrast
= 'subtle'
| 'neutral'
| 'vivid'

// This type could maybe be renamed.
type semantic
= 'information'
| 'success'
| 'warning'
| 'error'
| 'secret'

type color
= rainbow
| monochrome

// This type could maybe be renamed.
type theme
= level
| contrast
| semantic

export type {
	monochrome,
	rainbow,
	color,
	level,
	contrast,
	theme,
}
