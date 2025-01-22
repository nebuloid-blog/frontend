import React from 'react'
import {SiteLogo} from '.'
import type {Meta, StoryObj} from '@storybook/react'

interface StoryProps {
	colorScheme: 'system' | 'light' | 'dark',
}

const SiteLogoStory: React.FC<StoryProps> = ({colorScheme}) => (
	<div data-color-scheme = {colorScheme}>
		<SiteLogo />
	</div>
)

const metadata: Meta<typeof SiteLogoStory> = {
	component: SiteLogoStory,
	argTypes: {
		colorScheme: {
			control: 'radio',
			options: ['system', 'light', 'dark'],
			defaultValue: 'system',
		},
	},
	parameters: {
		layout: 'centered',
	},
}

const Normal: StoryObj<typeof SiteLogoStory> = {args: { }}

export default metadata
export {Normal}
