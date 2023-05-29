/* eslint-disable quotes */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Code/CodeDeprecated',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: 'export default {\n'
        + "    title: 'shared/Code', \n"
        + "    component: Code, \n"
        + "    argTypes: { \n"
        + "    backgroundColor: { control: 'color' }, \n"
        + "    }, \n"
        + "} as ComponentMeta<typeof Code>;",
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    text: 'export default {\n'
        + "    title: 'shared/Code', \n"
        + "    component: Code, \n"
        + "    argTypes: { \n"
        + "    backgroundColor: { control: 'color' }, \n"
        + "    }, \n"
        + "} as ComponentMeta<typeof Code>;",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    text: 'export default {\n'
        + "    title: 'shared/Code', \n"
        + "    component: Code, \n"
        + "    argTypes: { \n"
        + "    backgroundColor: { control: 'color' }, \n"
        + "    }, \n"
        + "} as ComponentMeta<typeof Code>;",
};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
