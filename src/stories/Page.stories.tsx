import type {ComponentStoryFn, ComponentMeta} from '@storybook/react'
import {within, userEvent} from '@storybook/testing-library'
import React from 'react'
import {Page} from './Page'

const metadata: ComponentMeta<typeof Page> = {
	title: 'Example/Page',
	component: Page,
	parameters: {
		// More on Story layout:
		// https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

const Template: ComponentStoryFn<typeof Page> = (args) => <Page {...args} />
const LoggedIn = Template.bind({ })
const LoggedOut = Template.bind({ })

// More on interaction testing:
// https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = ({canvasElement}) => {
	const canvas = within(canvasElement)
	const loginButton = canvas.getByRole('button', {name: /Log in/ui})
	userEvent.click(loginButton)
}

export {LoggedIn, LoggedOut}
export default metadata
