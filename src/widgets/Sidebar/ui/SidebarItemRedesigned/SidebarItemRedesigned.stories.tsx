import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SidebarItemRedesigned } from './SidebarItemRedesigned';
import Icon from '@/shared/assets/icons/about.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Sidebar/SidebarItem/SidebarItemRedesigned',
    component: SidebarItemRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarItemRedesigned>;

const Template: ComponentStory<typeof SidebarItemRedesigned> = (args) => (
    <div className="app_redesigned">
        <SidebarItemRedesigned {...args} />
    </div>
);

const defaultArgs = {
    item: {
        Icon,
        text: 'О сайте',
        authOnly: false,
        path: '',
    },
};

const defaultStore = {
    user: {
        authData: {
            id: '1',
            username: 'Иван Иванов',
        },
    },
};

export const Light = Template.bind({});
Light.args = defaultArgs;
Light.decorators = [
    StoreDecorator(defaultStore),
];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [
    StoreDecorator(defaultStore),
    ThemeDecorator(Theme.DARK),
];

export const OptionalBg = Template.bind({});
OptionalBg.args = defaultArgs;
OptionalBg.decorators = [
    StoreDecorator(defaultStore),
    ThemeDecorator(Theme.GRAY),
];

export const Collapsed = Template.bind({});
Collapsed.args = { ...defaultArgs, collapsed: true };
Collapsed.decorators = [
    StoreDecorator(defaultStore),
];
