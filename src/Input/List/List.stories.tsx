import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Field } from '../Field.js';
import Label from '../Label.js';
import ListComponent from './List.js';
import ListItemComponent from './ListItem.js';

const meta: Meta<typeof ListComponent> = {
  component: ListComponent,
  title: 'Component/Input/List',
};

export default meta;

type Story = StoryObj<typeof ListComponent>;

export const List: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    return (
      <>
        <div>Selected: {selectedValue}</div>
        <Field>
          <Label>Music Key</Label>
          <ListComponent
            className={'tw-w-20'}
            horizontal={true}
            onSelected={e => {
              setSelectedValue(e.detail.selected);
            }}
            selected={selectedValue}
          >
            <ListItemComponent value={'C'}>C</ListItemComponent>
            <ListItemComponent value={'C#'}>C#</ListItemComponent>
            <ListItemComponent value={'D'}>D</ListItemComponent>
            <ListItemComponent value={'D#'}>D#</ListItemComponent>
            <ListItemComponent value={'E'}>E</ListItemComponent>
            <ListItemComponent value={'F'}>F</ListItemComponent>
            <ListItemComponent value={'F#'}>F#</ListItemComponent>
            <ListItemComponent value={'G'}>G</ListItemComponent>
            <ListItemComponent value={'G#'}>G#</ListItemComponent>
            <ListItemComponent value={'A'}>A</ListItemComponent>
            <ListItemComponent value={'A#'}>A#</ListItemComponent>
            <ListItemComponent value={'B'}>B</ListItemComponent>
          </ListComponent>
        </Field>
      </>
    );
  },
};
