import {DefinitionList} from '@components/DefinitionList'
import {PageWrapper} from '@components/PageWrapper'
import {AppWrapper} from '@templates/App/AppWrapper'

const inlineDefinitionList = [
	{ // Inline Actions
		terms: [
			<>inline anchor, (<code>{'<a>'}</code>)</>,
			<>inline button, (<code>{'<button>'}</code>)</>,
		],
		definitions: [
			<a href = '#'>sample</a>,
			<a href = ''>sample</a>,
			<a>disabled</a>,
			<button>sample</button>,
			<button disabled>disabled</button>,
		],
	},
	{ // Emboldened Text
		terms: [
			<>bold, (<code>{'<b>'}</code>)</>,
			<>strong, (<code>{'<strong>'}</code>)</>,
			<>definition, (<code>{'<dfn>'}</code>)</>,
		],
		definitions: [
			<b>sample</b>,
			<strong>sample</strong>,
			<dfn>sample</dfn>,
			<dfn title = 'definition with title'>w/title</dfn>,
		],
	},
	{ // Italicized Text
		terms: [
			<>italic, (<code>{'<i>'}</code>)</>,
			<>emphasis, (<code>{'<em>'}</code>)</>,
			<>citation, (<code>{'<cite>'}</code>)</>,
		],
		definitions: [
			<i>sample</i>,
			<em>sample</em>,
			<cite>sample</cite>,
		],
	},
	{ // Semantically Underlined Text
		terms: [<>underline, (<code>{'<u>'}</code>)</>],
		definitions: [<u>sample</u>],
	},
	{ // Struck-Out Text
		terms: [<>strikethrough, (<code>{'<s>'}</code>)</>],
		definitions: [<s>sample</s>],
	},

	{ // Quoted Text
		terms: [<>quote, (<code>{'<q>'}</code>)</>],
		definitions: [<q>sample</q>],
	},
	{ // Abbreviated Phrases
		terms: [<>abbreviation, (<code>{'<abbr>'}</code>)</>],
		definitions: [
			<abbr>sample</abbr>,
			<abbr title = 'with title'>w/title</abbr>,
		],
	},
	{ // Variable Indicators
		terms: [<>variable, (<code>{'<var>'}</code>)</>],
		definitions: [<var>sample</var>],
	},


	{ // Human Input Samples
		terms: [
			(
				<>
					keyboard/<abbr title = 'Human Input Device'>HID</abbr>
					{' '}sample, (<code>{'<kbd>'}</code>)
				</>
			),
		],
		definitions: [<kbd>sample</kbd>],
	},
	{ // Code & Output Samples
		terms: [
			<>sample/computer output, (<code>{'<samp>'}</code>)</>,
			<>code, (<code>{'<code>'}</code>)</>,
		],
		definitions: [
			<samp>sample</samp>,
			<code>sample</code>,
			<code><samp>sample</samp></code>,
			<samp><code>sample</code></samp>,
		],
	},

	{ // Superscripted Text
		terms: [<>superscript, (<code>{'<sup>'}</code>)</>],
		definitions: [
			<sup>sample</sup>,
			<>x<sup>2</sup></>,
		],
	},
	{ // Subscripted Text
		terms: [<>subscript, (<code>{'<sub>'}</code>)</>],
		definitions: [
			<sub>sample</sub>,
			<>∂<sub>xy</sub></>,
		],
	},
	{ // Tiny Legal Details
		terms: [<>small/legal, (<code>{'<small>'}</code>)</>],
		definitions: [<small>sample</small>],
	},

	{ // Inline Data Denotators
		terms: [
			<>data, (<code>{'<data>'}</code>)</>,
			<>time, (<code>{'<time>'}</code>)</>,
		],
		definitions: [
			<data>sample</data>,
			<time>sample</time>,
		],
	},
]

const InlineElements = ( ) => (
	<AppWrapper>
		<PageWrapper hero>
			<main>
				<h1>Inline Style Reference Sheet</h1>
				<DefinitionList
					items = {
						inlineDefinitionList.map(({
							terms,
							definitions,
						}) => ([
							terms,
							definitions,
						]))
					}
				/>
			</main>
		</PageWrapper>
	</AppWrapper>
)

export {InlineElements}
