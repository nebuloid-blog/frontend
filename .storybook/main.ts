import type {StorybookConfig} from '@storybook/nextjs'

const config: StorybookConfig = {
	framework: '@storybook/nextjs',
	staticDirs: ['../public'],
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {docs: false},
		},
		'@storybook/addon-interactions',
	],
}

export default config
