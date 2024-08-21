import {Meta, StoryObj} from '@storybook/react';

import BadgePageIcon from './index';

const meta: Meta<typeof BadgePageIcon> = {
  title: 'Components/BadgePageIcon',
  component: BadgePageIcon,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display below the icon.',
    },
    src: {
      control: 'text',
      description: 'The SVG icon path to display.',
    },
    disable: {
      control: 'boolean',
      description:
        'If true, the icon is replaced with a lock icon and the component is disabled.',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function when the component is clicked.',
    },
  },
  args: {
    text: 'Default Text',
    src: '/icon/icon-happy-face.svg',
    disable: false,
  },
};

export default meta;

type Story = StoryObj<typeof BadgePageIcon>;

export const start: Story = {
  args: {
    text: '만디 스타터',
    src: '/icon/icon-mountain.svg',
    disable: false,
  },
};

export const collector: Story = {
  args: {
    text: '코스 수집가',
    src: '/icon/icon-note.svg',
    disable: false,
  },
};

export const share: Story = {
  args: {
    text: '공유의 기쁨',
    src: '/icon/icon-write.svg',
    disable: false,
  },
};

export const completed: Story = {
  args: {
    text: '완주의 시작',
    src: '/icon/icon-hole-cup.svg',
    disable: false,
  },
};

export const working: Story = {
  args: {
    text: '걸어서 만보',
    src: '/icon/icon-working.svg',
    disable: false,
  },
};

export const holic: Story = {
  args: {
    text: '만디홀릭',
    src: '/icon/icon-happy-face.svg',
    disable: false,
  },
};

export const Disabled: Story = {
  args: {
    text: '잠긴 상태',
    src: '/icon/icon-happy-face.svg',
    disable: true,
  },
  render: args => <BadgePageIcon {...args} />,
};