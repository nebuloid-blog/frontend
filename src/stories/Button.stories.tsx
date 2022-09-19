import type {ComponentStoryFn, ComponentMeta} from '@storybook/react'
import React from 'react'
import {Button} from './Button'

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const metadata: ComponentMeta<typeof Button> = {
	title: 'Example/Button',
	component: Button,
	// More on argTypes:
	// https://storybook.js.org/docs/react/api/argtypes
	argTypes: {backgroundColor: {control: 'color'}},
}

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStoryFn<typeof Button> = (args) => <Button {...args} />
const Primary = Template.bind({ })
const Secondary = Template.bind({ })
const Large = Template.bind({ })
const Small = Template.bind({ })

// More on args:
// https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Button',
}

Secondary.args = {label: 'Button'}

Large.args = {
	size: 'large',
	label: 'Button',
}

Small.args = {
	size: 'small',
	label: 'Button',
}

export {Primary, Secondary, Large, Small}
export default metadata
