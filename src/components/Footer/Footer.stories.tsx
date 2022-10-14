import type {ComponentStoryFn, ComponentMeta} from '@storybook/react'
import React from 'react'
import {Footer} from './Footer'

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const metadata: ComponentMeta<typeof Footer> = {
	title: 'Layout/Footer',
	component: Footer,
	parameters: {docs: {page: null}},
}

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStoryFn<typeof Footer> = (args) => <Footer />
const Normal = Template.bind({ })

export {Normal}
export default metadata
