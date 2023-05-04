import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const NormalWithFeedback = Template.bind({});
NormalWithFeedback.args = {
    title: 'Поставьте оценку',
    feedbackTitle: 'Оставьте отзыв',
    hasFeedback: true,
};

export const DarkWithFeedback = Template.bind({});
DarkWithFeedback.args = {
    title: 'Поставьте оценку',
    feedbackTitle: 'Оставьте отзыв',
    hasFeedback: true,
};
DarkWithFeedback.decorators = [ThemeDecorator(Theme.DARK)];

export const GrayWithFeedback = Template.bind({});
GrayWithFeedback.args = {
    title: 'Поставьте оценку',
    feedbackTitle: 'Оставьте отзыв',
    hasFeedback: true,
};
GrayWithFeedback.decorators = [ThemeDecorator(Theme.GRAY)];

export const NormalWithRate = Template.bind({});
NormalWithRate.args = {
    rate: 2,
};

export const DarkWithRate = Template.bind({});
DarkWithRate.args = {
    rate: 2,
};
DarkWithRate.decorators = [ThemeDecorator(Theme.DARK)];

export const GrayWithRate = Template.bind({});
GrayWithRate.args = {
    rate: 2,
};
GrayWithRate.decorators = [ThemeDecorator(Theme.GRAY)];
