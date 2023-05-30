import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ForbiddenPage from './ForbiddenPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;
const TemplateRedesigned: ComponentStory<typeof ForbiddenPage> = () => (
    <div className="app_redesigned">
        <ForbiddenPage />
    </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    scrollSave: {
        scroll: {
            '': 0,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    scrollSave: {
        scroll: {
            '': 0,
        },
    },
})];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.GRAY), StoreDecorator({
    scrollSave: {
        scroll: {
            '': 0,
        },
    },
})];

export const LightRedesigned = TemplateRedesigned.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
    }),
    NewDesignDecorator,
];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    ThemeDecorator(Theme.DARK), StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
    }),
    NewDesignDecorator,
];

export const GrayRedesigned = TemplateRedesigned.bind({});
GrayRedesigned.args = {};
GrayRedesigned.decorators = [
    ThemeDecorator(Theme.GRAY), StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
    }),
    NewDesignDecorator,
];
