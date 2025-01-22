import '@styles/globals.scss'

const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(?<color_info>background|color)$/ui,
			date: /Date$/u,
		},
	},
}

export {parameters}
