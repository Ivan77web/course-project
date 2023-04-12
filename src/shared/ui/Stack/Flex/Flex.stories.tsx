import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const children = (
    <>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </>
);

export const JustifyStart = Template.bind({});
JustifyStart.args = {
    children,
    justify: 'start',
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
    children,
    justify: 'center',
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
    children,
    justify: 'end',
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
    children,
    justify: 'between',
};

export const AlignStart = Template.bind({});
AlignStart.args = {
    children,
    align: 'start',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    children,
    align: 'center',
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
    children,
    align: 'end',
};

export const Row = Template.bind({});
Row.args = {
    children,
    direction: 'row',
};

export const Column = Template.bind({});
Column.args = {
    children,
    direction: 'column',
};

export const Gap4 = Template.bind({});
Gap4.args = {
    children,
    gap: '4',
};

export const Gap8 = Template.bind({});
Gap8.args = {
    children,
    gap: '8',
};

export const Gap16 = Template.bind({});
Gap16.args = {
    children,
    gap: '16',
};

export const Gap32 = Template.bind({});
Gap32.args = {
    children,
    gap: '32',
};
