import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PanelWrapper } from '../PanelWrapper';
import { Panel, PanelProps } from './Panel';

export default {
  title: 'Layout/Panel',
  component: Panel,
  argTypes: {},
} as Meta;

const Template: Story<PanelProps> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Panel Example',
  subtitle: 'some other title',
};

export const Sizes = () => (
  <PanelWrapper>
    <Panel title='Panel Example' subtitle="Isn't it cool?">
      <p>Some Content Inside</p>
    </Panel>
    <Panel size='half'>
      <p>Some Content Inside</p>
    </Panel>
    <Panel size='half'>
      <p>Some Content Inside</p>
    </Panel>
    <Panel size='third'>
      <p>Some Content Inside</p>
    </Panel>
    <Panel size='third'>
      <p>Some Content Inside</p>
    </Panel>
    <Panel size='third'>
      <p>Some Content Inside</p>
    </Panel>
  </PanelWrapper>
);
