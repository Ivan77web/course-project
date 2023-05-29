import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '../Icon';
import Arrow from '@/shared/assets/icons/arrowRedesigned.svg';

export default {
    title: 'shared/Button/ButtonRedesigned',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// addonLeft?: ReactNode;
// addonRight?: ReactNode;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
    color: 'normal',
};

export const Success = Template.bind({});
Success.args = {
    children: 'Text',
    color: 'success',
};

export const Error = Template.bind({});
Error.args = {
    children: 'Text',
    color: 'error',
};

export const M = Template.bind({});
M.args = {
    children: 'Text',
    size: 'm',
};

export const L = Template.bind({});
L.args = {
    children: 'Text',
    size: 'l',
};

export const XL = Template.bind({});
XL.args = {
    children: 'Text',
    size: 'xl',
};

export const OutlineSquare = Template.bind({});
OutlineSquare.args = {
    children: 'Text',
    variant: 'outline',
    square: true,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
    children: 'Text',
    variant: 'outline',
    disabled: true,
};

export const OutlineFullWidth = Template.bind({});
OutlineFullWidth.args = {
    children: 'Text',
    variant: 'outline',
    fullWidth: true,
};

export const OutlineAddonLeft = Template.bind({});
OutlineAddonLeft.args = {
    children: 'Text',
    variant: 'outline',
    addonLeft: <Icon Svg={Arrow} />,
};

export const OutlineAddonRight = Template.bind({});
OutlineAddonRight.args = {
    children: 'Text',
    variant: 'outline',
    addonRight: <Icon Svg={Arrow} />,
};
