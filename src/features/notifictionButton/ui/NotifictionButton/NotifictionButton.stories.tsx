import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotifictionButton } from './NotifictionButton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/NotifictionButton',
    component: NotifictionButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'first',
                        description: 'first second',
                    },
                    {
                        id: '2',
                        title: 'second',
                        description: 'second second',
                    },
                    {
                        id: '3',
                        title: 'third',
                        description: 'third second',
                        href: 'testHref',
                    },
                    {
                        id: '4',
                        title: 'fourth',
                        description: 'fourth second',
                        href: 'testHref',
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotifictionButton>;

const Template: ComponentStory<typeof NotifictionButton> = (args) => <NotifictionButton {...args} />;
const TemplateRedesigned: ComponentStory<typeof NotifictionButton> = (args) => (
    <div className="app_redesigned">
        <NotifictionButton {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GRAY)];

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [NewDesignDecorator, StoreDecorator({})];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.decorators = [NewDesignDecorator, StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const GrayRedesigned = TemplateRedesigned.bind({});
GrayRedesigned.decorators = [NewDesignDecorator, StoreDecorator({}), ThemeDecorator(Theme.GRAY)];
