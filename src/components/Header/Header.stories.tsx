import type {Meta, StoryObj} from '@storybook/react'
import {Header} from './Header'

const metadata: Meta<typeof Header> = {component: Header}
const Normal: StoryObj<typeof Header> = {args: { }}

export default metadata
export {Normal}
