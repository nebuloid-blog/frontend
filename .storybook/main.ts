import 'path'

const settings = {
	stories: [
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {docs: false},
		},
		'@storybook/addon-interactions',
		'storybook-addon-next',
		'storybook-addon-swc',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: { }
	}
}

export default settings
