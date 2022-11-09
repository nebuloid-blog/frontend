import '@styles/globals.scss'

const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/ui,
			date: /Date$/u,
		},
	},
}

export {parameters}
