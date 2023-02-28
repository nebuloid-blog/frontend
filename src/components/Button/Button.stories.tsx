import type {Meta, StoryObj} from '@storybook/react'
import type {ButtonProps} from '.'
import {Button} from '.'

type StoryProps = Pick<ButtonProps, 'base' | 'dest' | 'color' | 'disabled'> & {
	label: string,
	colorScheme: 'system' | 'light' | 'dark',
}

const ButtonStory: React.FC<StoryProps> = ({
	colorScheme,
	label: children,
	...props
}) => {
	props.base ??= 'button'
	if (props.base === 'button') {
		return (
			<div data-color-scheme={colorScheme}>
				<Button
					base={props.base}
					onClick={( ) => undefined}
					color={props.color}
					disabled={props.disabled}
				>
					{children}
				</Button>
			</div>
		)
	}

	else {
		// eslint-disable-next-line no-script-url
		const href = 'javascript:void(0);'

		return (
			<div data-color-scheme={colorScheme}>
				<Button
					base={props.base}
					href={href}
					color={props.color}
					disabled={props.disabled}
				>
					{children}
				</Button>
			</div>
		)
	}
}

const metadata: Meta<typeof ButtonStory> = {
	component: ButtonStory,
	argTypes: {
		colorScheme: {
			control: 'radio',
			options: ['system', 'light', 'dark'],
			defaultValue: 'system',
		},
		color: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary', 'link'],
			defaultValue: 'primary',
		},
		disabled: {
			control: 'boolean',
			defaultValue: false,
		},
		base: {
			control: 'select',
			options: ['link', 'button'],
			defaultValue: 'button',
		},
		dest: {
			control: 'select',
			options: ['internal', 'external'],
			defaultValue: 'external',
		},
		label: {
			control: 'text',
			defaultValue: 'Click Me!',
		},
	},
	parameters: {
		layout: 'centered',
	},
}

// console.info(
//   // These explicit links should work.
//   <Button base='a' />,
//   <Button base='a' disabled />,
//   <Button base='a' href='coolio' />,
//   <Button base='a' href='coolio' disabled />,

//   // These implicit buttons should work.
//   <Button />,
//   <Button base={undefined} />,
//   <Button onClick={( ) => undefined} />,
//   <Button onClick={( ) => undefined} disabled />,
//   <Button base={undefined} onClick={( ) => undefined} />,
//   <Button base={undefined} onClick={( ) => undefined} disabled />,

//   // These implicit links should fail.
//   <Button href='cool' />,
//   <Button href='cool' disabled />,
//   <Button base={undefined} href='cool'/>,
//   <Button base={undefined} href='cool' disabled/>,

//   // These non-buttons should fail.
//   <Button base='button' href='cool' />,
//   <Button base='button' href='cool' disabled/>,
// )

const Normal: StoryObj<typeof ButtonStory> = {args: { }}

export default metadata
export {Normal}
