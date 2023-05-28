import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import avatar from '../../../assets/tests/avatarForStorybook.jpeg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: avatar,
    size: 150,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    src: avatar,
    size: 300,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    src: avatar,
    size: 50,
};
