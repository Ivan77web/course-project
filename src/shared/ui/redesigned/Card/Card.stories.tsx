import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text';
import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Card/CardRedesigned',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// export type CardVariant = 'normal' | 'outlined' | 'light';
// export type CardPadding = '0' | '8' | '16' | '24';
// export type CardBorder = 'roundBorder' | 'normalBorder';

// const mapPaddingToClass: Record<CardPadding, string> = {
//     0: 'gap_0',
//     8: 'gap_8',
//     16: 'gap_16',
//     24: 'gap_24',
// };

// interface CardProps extends HTMLAttributes<HTMLDivElement> {
//     className?: string;
//     children: ReactNode;
//     variant?: CardVariant;
//     max?: boolean;
//     padding?: CardPadding;
//     border?: CardBorder;
// }

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="text" text="text text" />,
};

export const NormalOutlined = Template.bind({});
NormalOutlined.args = {
    children: <Text title="text" text="text text" />,
    variant: 'outlined',
};

export const NormalLight = Template.bind({});
NormalLight.args = {
    children: <Text title="text" text="text text" />,
    variant: 'light',
};

export const Padding0 = Template.bind({});
Padding0.args = {
    children: <Text title="text" text="text text" />,
    padding: '0',
};

export const Padding8 = Template.bind({});
Padding8.args = {
    children: <Text title="text" text="text text" />,
    padding: '8',
};

export const Padding16 = Template.bind({});
Padding16.args = {
    children: <Text title="text" text="text text" />,
    padding: '16',
};

export const Padding24 = Template.bind({});
Padding24.args = {
    children: <Text title="text" text="text text" />,
    padding: '24',
};

export const RoundBorder = Template.bind({});
RoundBorder.args = {
    children: <Text title="text" text="text text" />,
    border: 'roundBorder',
};

export const NormalBorder = Template.bind({});
NormalBorder.args = {
    children: <Text title="text" text="text text" />,
    border: 'normalBorder',
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="text" text="text text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {
    children: <Text title="text" text="text text" />,
};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];

export const Max = Template.bind({});
Max.args = {
    max: true,
    children: <Text title="text" text="text text" />,
};
Max.decorators = [ThemeDecorator(Theme.GRAY)];
