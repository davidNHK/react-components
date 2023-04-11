import type { Meta, StoryObj } from '@storybook/react';

import { Content, Footer, Header, Main, Page, Side } from './LayoutForStories';

export default {
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  subcomponents: { Footer, Header, Main, Side },
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layout/ThreeColumnLayout',
} as Meta<typeof Page>;

export const MainInCenter: StoryObj<typeof Page> = {
  render: () => (
    <Page>
      <Header>TwoColumnLayout Header</Header>
      <Content className={'tw-flex'}>
        <Side className={'tw-w-1/4'}>TwoColumnLayout Side 1</Side>
        <Main className={'tw-w-2/4'}>TwoColumnLayout Main</Main>
        <Side className={'tw-w-1/4'}>TwoColumnLayout Side 2</Side>
      </Content>
      <Footer>TwoColumnLayout Footer</Footer>
    </Page>
  ),
};

export const MainInLeft: StoryObj<typeof Page> = {
  render: () => (
    <Page>
      <Header>TwoColumnLayout Header</Header>
      <Content className={'tw-flex'}>
        <Main className={'tw-w-2/4'}>TwoColumnLayout Main</Main>
        <Side className={'tw-w-1/4'}>TwoColumnLayout Side 1</Side>
        <Side className={'tw-w-1/4'}>TwoColumnLayout Side 2</Side>
      </Content>
      <Footer>TwoColumnLayout Footer</Footer>
    </Page>
  ),
};

export const MainInRight: StoryObj<typeof Page> = {
  render: () => (
    <Page>
      <Header>TwoColumnLayout Header</Header>
      <Content className={'tw-flex'}>
        <Side className={'tw-w-1/4'}>TwoColumnLayout Side 1</Side>
        <Side className={'tw-w-1/4'}>TwoColumnLayout Side 2</Side>
        <Main className={'tw-w-2/4'}>TwoColumnLayout Main</Main>
      </Content>
      <Footer>TwoColumnLayout Footer</Footer>
    </Page>
  ),
};
