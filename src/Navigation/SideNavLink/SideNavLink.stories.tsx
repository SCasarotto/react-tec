import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SideNavLink, SideNavLinkProps } from './SideNavLink';

export default {
  title: 'Navigation/SideNavLink',
  component: SideNavLink,
  argTypes: {},
} as Meta;

const Template: Story<SideNavLinkProps> = (args) => <SideNavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/somelink',
  title: 'some link',
};

export const Many = () => (
  <>
    <ul>
      <SideNavLink to='/SideNavLinkExample' title='Home' exact />
      <SideNavLink
        to='/SideNavLinkExample/components/globals'
        title='Globals'
      />
      <SideNavLink to='/SideNavLinkExample/components/layout' title='Layout' />
      <SideNavLink
        to='/SideNavLinkExample/components/navigation'
        title='Navigation'
      />
      <SideNavLink to='/SideNavLinkExample/components/form' title='Form' />
      <SideNavLink to='/SideNavLinkExample/components/popup' title='Popup' />
      <SideNavLink
        to='/SideNavLinkExample/components/utility'
        activePath='/SideNavLinkExample/components'
        title='Utility *'
      />
    </ul>
    <p style={{ color: 'lightgrey' }}>* active path example</p>
  </>
);
