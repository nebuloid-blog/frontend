import {MenuButton, MenuBar} from '.'
import type {Meta, StoryObj} from '@storybook/react'

interface StoryProps {
	colorScheme: 'system' | 'light' | 'dark',
}

const NavBarStory: React.FC<StoryProps> = ({colorScheme}) => (
	<div data-color-scheme = {colorScheme}>
		<MenuBar>
			<MenuButton href = '#' highlight>
				Home
			</MenuButton>

			<MenuButton href = '#'>
				Projects
			</MenuButton>

			<MenuButton href = '#'>
				Blog
			</MenuButton>
		</MenuBar>
	</div>
)

const metadata: Meta<typeof NavBarStory> = {
	component: NavBarStory,
	argTypes: {
		colorScheme: {
			control: 'radio',
			options: ['system', 'light', 'dark'],
			defaultValue: 'system',
		},
	},
}

const Normal: StoryObj<typeof NavBarStory> = {args: { }}

export default metadata
export {Normal}
