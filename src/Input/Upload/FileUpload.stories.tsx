import type { Meta, StoryObj } from '@storybook/react';

import { Field } from '../Field.js';
import Label from '../Label.js';
import FileUploadComponent from './FileUpload';

const meta: Meta<typeof FileUploadComponent> = {
  component: FileUploadComponent,
  title: 'Component/Input/FileUpload',
};

export default meta;

type Story = StoryObj<typeof FileUploadComponent>;

export const FileUpload: Story = {
  args: {
    children: 'Click to Upload',
  },
  render: ({ children, 'data-testid': testId, ...rest }) => (
    <Field {...rest}>
      <Label>Click toUpload File</Label>
      <FileUploadComponent data-testid={testId}>{children}</FileUploadComponent>
    </Field>
  ),
};