import {MenuButton} from '.'
import type {Meta, StoryObj} from '@storybook/react'
import type {FC} from 'react'

interface StoryProps {
	colorScheme: 'system' | 'light' | 'dark',
	highlight: boolean,
}

const NavButtonStory: FC<StoryProps> = ({
	colorScheme,
	highlight,
}) => (
	<menu
		data-color-scheme = {colorScheme}
		style = {{
			backgroundColor: 'var(--background-clear)',
		}}
	>
		<MenuButton
			href = '#'
			highlight = {highlight}
		>
			Click Me!
		</MenuButton>
	</menu>
)

const metadata: Meta<typeof NavButtonStory> = {
	component: NavButtonStory,
	argTypes: {
		colorScheme: {
			control: 'radio',
			options: ['system', 'light', 'dark'],
			defaultValue: 'system',
		},
		highlight: {
			control: 'boolean',
			defaultValue: false,
		},
	},
	parameters: {
		layout: 'centered',
	},
}

const Normal: StoryObj<typeof NavButtonStory> = {args: { }}

export default metadata
export {Normal}
