import type {Meta, StoryObj} from '@storybook/react'
import {SiteLogo} from '.'

interface StoryProps {
	colorScheme: 'system' | 'light' | 'dark',
}

const SiteLogoStory: React.FC<StoryProps> = ({colorScheme}) => (
	<div data-color-scheme={colorScheme}>
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
}

const Normal: StoryObj<typeof SiteLogoStory> = {args: { }}

export default metadata
export {Normal}
