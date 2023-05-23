import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { DropDown } from './DropDown';
import { Button } from '../../../../deprecated/Button/Button';

export default {
    title: 'shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <div style={{ paddingTop: '280px' }}><DropDown {...args} /></div>;

const defaultArgs = {
    trigger: <Button>Меню</Button>,
    items: [
        {
            content: 'First',
        },
        {
            content: 'First First First',
        },
        {
            content: 'First',
        },

    ],
};

export const NormalTopLeft = Template.bind({});
NormalTopLeft.args = {
    ...defaultArgs,
    direction: 'top left',
};

export const NormalTopRight = Template.bind({});
NormalTopRight.args = {
    ...defaultArgs,
    direction: 'top right',
};

export const NormalBottomLeft = Template.bind({});
NormalBottomLeft.args = {
    ...defaultArgs,
    direction: 'bottom left',
};

export const NormalBottomRight = Template.bind({});
NormalBottomRight.args = {
    ...defaultArgs,
    direction: 'bottom right',
};

export const DarkTopLeft = Template.bind({});
DarkTopLeft.args = {
    ...defaultArgs,
    direction: 'top left',
};
DarkTopLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopRight = Template.bind({});
DarkTopRight.args = {
    ...defaultArgs,
    direction: 'top right',
};
DarkTopRight.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkBottomLeft = Template.bind({});
DarkBottomLeft.args = {
    ...defaultArgs,
    direction: 'bottom left',
};
DarkBottomLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkBottomRight = Template.bind({});
DarkBottomRight.args = {
    ...defaultArgs,
    direction: 'bottom right',
};
DarkBottomRight.decorators = [ThemeDecorator(Theme.DARK)];

export const GrayTopLeft = Template.bind({});
GrayTopLeft.args = {
    ...defaultArgs,
    direction: 'top left',
};
GrayTopLeft.decorators = [ThemeDecorator(Theme.GRAY)];

export const GrayTopRight = Template.bind({});
GrayTopRight.args = {
    ...defaultArgs,
    direction: 'top right',
};
GrayTopRight.decorators = [ThemeDecorator(Theme.GRAY)];

export const GrayBottomLeft = Template.bind({});
GrayBottomLeft.args = {
    ...defaultArgs,
    direction: 'bottom left',
};
GrayBottomLeft.decorators = [ThemeDecorator(Theme.GRAY)];

export const GrayBottomRight = Template.bind({});
GrayBottomRight.args = {
    ...defaultArgs,
    direction: 'bottom right',
};
GrayBottomRight.decorators = [ThemeDecorator(Theme.GRAY)];
