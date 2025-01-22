import type {ReactNode} from 'react'

// TextNode is the type of this component's children.
// This can be one of multiple things, including:
// (a) a simple string: "Hello world!"
// (b) a text-based react fragment: <>Hello world!</>
//
// There can be other markup in (b), such as:
//  <>Hello world! I am <em>Nolan Kovacik</em>.</>
//
// WARNING!
// This is a pretty good type for now, but it allows for
//  certain other weird children, like certain elements.
// For example, consider that a <div> tag child is allowed.
// TODO!
// Refine this type accordingly.
type TextNode = string | ReactNode

export type {TextNode}
