import React from 'react'
import OnboardingLayout from '../../components/artists/OnboardingLayout'
import { Button } from '../../components/buttons'

export default {
  title: 'For Artists/OnboardingLayout',
  component: OnboardingLayout,
}

const Template = (args) => <OnboardingLayout {...args} />

export const Default = Template.bind({})

Default.args = {
  children: <div>- Content Area - </div>,
  footer: (
    <>
      <Button>Prev</Button>
      <Button>Next</Button>
    </>
  ),
}
