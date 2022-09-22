import type {ComponentStoryFn, ComponentMeta} from '@storybook/react'
import React from 'react'
import {Header} from './Header'

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const metadata: ComponentMeta<typeof Header> = {
	title: 'Layout/Header',
	component: Header,
	parameters: {docs: {page: null}},
}

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStoryFn<typeof Header> = (args) => <Header {...args} />
const Normal = Template.bind({ })

export {Normal}
export default metadata
