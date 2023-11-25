import { StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    onClick: () => alert('Clicked!')
  }
};