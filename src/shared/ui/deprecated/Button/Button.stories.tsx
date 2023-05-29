import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
    title: 'shared/Button/ButtonDeprecated',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// CLEAR = 'clear',
// CLEAR_INVERTED = 'clear_inverted',
// OUTLINE = 'outline',
// OUTLINE_RED = 'outline_red',
// BACKGROUND = 'background',
// BACKGROUND_INVERTED = 'background_inverted',

// M = 'size_m',
// L = 'size_l',
// XL = 'size_xl',

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE_RED,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const ClearL = Template.bind({});
ClearL.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
    size: ButtonSize.L,
};

export const ClearInvertedL = Template.bind({});
ClearInvertedL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineRedL = Template.bind({});
OutlineRedL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE_RED,
    size: ButtonSize.L,
};

export const BackgroundL = Template.bind({});
BackgroundL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.L,
};

export const BackgroundInvertedL = Template.bind({});
BackgroundInvertedL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};

export const ClearXL = Template.bind({});
ClearXL.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
    size: ButtonSize.XL,
};

export const ClearInvertedXL = Template.bind({});
ClearInvertedXL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineRedXL = Template.bind({});
OutlineRedXL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE_RED,
    size: ButtonSize.XL,
};

export const BackgroundXL = Template.bind({});
BackgroundXL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.XL,
};

export const BackgroundInvertedXL = Template.bind({});
BackgroundInvertedXL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};

export const OutlineSquare = Template.bind({});
OutlineSquare.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    square: true,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    disabled: true,
};

export const OutlineFullWidth = Template.bind({});
OutlineFullWidth.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    fullWidth: true,
};
