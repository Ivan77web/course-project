import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StarRating } from './StarRating';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../const/theme';

export default {
    title: 'shared/StarRating/StarRatingRedesigned',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const GRAY = Template.bind({});
GRAY.args = {};
GRAY.decorators = [ThemeDecorator(Theme.GRAY)];

export const Selected = Template.bind({});
Selected.args = {
    selectedStars: 3,
};
