import type {Meta, StoryObj} from '@storybook/react'
import {InlineElements} from './InlineElements'

const metadata: Meta<typeof InlineElements> = {component: InlineElements}
const Normal: StoryObj<typeof InlineElements> = {args: { }}

export default metadata
export {Normal}
