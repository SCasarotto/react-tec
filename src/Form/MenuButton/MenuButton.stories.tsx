import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button } from '../Button';
import { MenuButton, MenuButtonProps } from './MenuButton';

export default {
  title: 'Form/MenuButton',
  component: MenuButton,
  argTypes: {},
} as Meta;

const Template: Story<MenuButtonProps> = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Click Me',
  children: ({ hideMenu }) => {
    return (
      <div>
        <Button
          onClick={() => {
            alert('Button 1 Clicked');
            hideMenu();
          }}
        >
          Button 1
        </Button>
        <Button
          onClick={() => {
            alert('Button 2 Clicked');
            hideMenu();
          }}
        >
          Button 2
        </Button>
        <Button
          onClick={() => {
            alert('Button 3 Clicked');
            hideMenu();
          }}
        >
          Button 3
        </Button>
      </div>
    );
  },
};
