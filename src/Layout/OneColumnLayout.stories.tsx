import type { Meta, StoryObj } from '@storybook/react';

import { Content, Footer, Header, Main, Page } from './LayoutForStories';

export default {
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  subcomponents: { Footer, Header, Main },
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layout/OneColumnLayout',
} as Meta<typeof Page>;

export const OneColumnLayout: StoryObj<typeof Page> = {
  render: () => (
    <Page>
      <Header>OneColumnLayout Header</Header>
      <Content>
        <Main className={'tw-h-full'}>OneColumnLayout Main</Main>
      </Content>
      <Footer>OneColumnLayout Footer</Footer>
    </Page>
  ),
};
