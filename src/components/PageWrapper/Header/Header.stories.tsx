import {Header} from './Header'
import type {Meta, StoryObj} from '@storybook/react'

const metadata: Meta<typeof Header> = {component: Header}
const Normal: StoryObj<typeof Header> = {args: { }}

export default metadata
export {Normal}
