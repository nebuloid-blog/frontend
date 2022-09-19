import type {ComponentStoryFn, ComponentMeta} from '@storybook/react'
import React from 'react'
import {Header} from './Header'

const metadata: ComponentMeta<typeof Header> = {
	title: 'Example/Header',
	component: Header,
	parameters: {
		// More on Story layout:
		// https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

const Template: ComponentStoryFn<typeof Header> = (args) => <Header {...args} />
const LoggedIn = Template.bind({ })
const LoggedOut = Template.bind({ })

LoggedIn.args = {user: {name: 'Jane Doe'}}
LoggedOut.args = { }

export {LoggedIn, LoggedOut}
export default metadata
