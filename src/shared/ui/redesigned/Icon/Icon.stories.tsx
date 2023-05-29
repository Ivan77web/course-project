import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import Arrow from '@/shared/assets/icons/arrowRedesigned.svg';

export default {
    title: 'shared/Icon/IconRedesigned',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    Svg: Arrow,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NormalClickable = Template.bind({});
NormalClickable.args = {
    Svg: Arrow,
    clickable: true,
};
NormalClickable.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    Svg: Arrow,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    Svg: Arrow,
};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
