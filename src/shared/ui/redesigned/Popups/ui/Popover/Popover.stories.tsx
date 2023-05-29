import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover/PopoverRedesigned',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <div style={{ width: '200px', padding: '100px' }}><Popover {...args} /></div>;

export const NormalBottomRight = Template.bind({});
NormalBottomRight.args = {
    children: (
        <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </div>
    ),
    trigger: 'Click me',
};

export const NormalBottomLeft = Template.bind({});
NormalBottomLeft.args = {
    children: (
        <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </div>
    ),
    trigger: 'Click me',
    direction: 'bottom left',
};

export const NormalTopLeft = Template.bind({});
NormalTopLeft.args = {
    children: (
        <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </div>
    ),
    trigger: 'Click me',
    direction: 'top left',
};

export const NormalTopRight = Template.bind({});
NormalTopRight.args = {
    children: (
        <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </div>
    ),
    trigger: 'Click me',
    direction: 'top right',
};
