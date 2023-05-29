/* eslint-disable quotes */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './Drawer';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Drawer/DrawerRedesigned',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

const children = (
    <div style={{ height: '100%' }}>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
        <p>Four</p>
        <p>Five</p>
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    children,
    isOpen: true,
    onClose: () => { },
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
