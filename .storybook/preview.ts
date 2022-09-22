import '../src/styles/globals.scss'

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/ui,
			date: /Date$/u,
		},
	},
}
