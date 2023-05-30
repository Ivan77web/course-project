import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UiDesignSwitcher>;

const Template: ComponentStory<typeof UiDesignSwitcher> = (args) => <UiDesignSwitcher {...args} />;
const TemplateRedesigned: ComponentStory<typeof UiDesignSwitcher> = (args) => (
    <div className="app_redesigned">
        <UiDesignSwitcher {...args} />
    </div>
);

const defaultStore = {
    user: {
        authData: {
            id: '1',
        },
    },
};

const defaultDecorators = (theme: Theme) => {
    return [
        ThemeDecorator(theme),
        StoreDecorator(defaultStore),
    ];
};

const defaultDecoratorsRedesigned = (theme: Theme) => {
    return [
        ThemeDecorator(theme),
        StoreDecorator(defaultStore),
        NewDesignDecorator,
    ];
};

export const Normal = Template.bind({});
Normal.decorators = defaultDecorators(Theme.LIGHT);

export const Dark = Template.bind({});
Dark.decorators = defaultDecorators(Theme.DARK);

export const OptionalBg = Template.bind({});
OptionalBg.decorators = defaultDecorators(Theme.GRAY);

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.decorators = defaultDecoratorsRedesigned(Theme.LIGHT);

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.decorators = defaultDecoratorsRedesigned(Theme.DARK);

export const OptionalBgRedesigned = TemplateRedesigned.bind({});
OptionalBgRedesigned.decorators = defaultDecoratorsRedesigned(Theme.GRAY);
