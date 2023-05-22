import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <div style={{ paddingTop: '280px' }}><Listbox {...args} /></div>;

const defaultArgs = {
    items: [
        { value: 'Первый вариант', content: '1' },
        { value: '2', content: 'Второй вариант' },
        { value: 'Третий вариант', content: '3' },
        { value: 'Четвертый вариант', content: '4' },
        { value: 'Пятый вариант', content: '5' },
    ],
    value: '2',
    defaultValue: 'Первый вариант',
    onChange: () => { },
    readonly: false,
    label: 'Выберите значение',
};

export const NormalBottomLeft = Template.bind({});
NormalBottomLeft.args = {
    ...defaultArgs,
    direction: 'bottom left',
};

export const NormalBottomRight = Template.bind({});
NormalBottomRight.args = {
    ...defaultArgs,
    direction: 'bottom right',
};

export const NormalTopLeft = Template.bind({});
NormalTopLeft.args = {
    ...defaultArgs,
    direction: 'top left',
};

export const NormalTopRight = Template.bind({});
NormalTopRight.args = {
    ...defaultArgs,
    direction: 'top right',
};

export const DarkBottomLeft = Template.bind({});
DarkBottomLeft.args = {
    ...defaultArgs,
    direction: 'bottom left',
};
DarkBottomLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkBottomRight = Template.bind({});
DarkBottomRight.args = {
    ...defaultArgs,
    direction: 'bottom right',
};
DarkBottomRight.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopLeft = Template.bind({});
DarkTopLeft.args = {
    ...defaultArgs,
    direction: 'top left',
};
DarkTopLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopRight = Template.bind({});
DarkTopRight.args = {
    ...defaultArgs,
    direction: 'top right',
};
DarkTopRight.decorators = [ThemeDecorator(Theme.DARK)];

export const GrayBottomLeft = Template.bind({});
GrayBottomLeft.args = {
    ...defaultArgs,
    direction: 'bottom left',
};
GrayBottomLeft.decorators = [ThemeDecorator(Theme.GRAY)];

export const GrayBottomRight = Template.bind({});
GrayBottomRight.args = {
    ...defaultArgs,
    direction: 'bottom right',
};
GrayBottomRight.decorators = [ThemeDecorator(Theme.GRAY)];

export const GrayTopLeft = Template.bind({});
GrayTopLeft.args = {
    ...defaultArgs,
    direction: 'top left',
};
GrayTopLeft.decorators = [ThemeDecorator(Theme.GRAY)];

export const GrayTopRight = Template.bind({});
GrayTopRight.args = {
    ...defaultArgs,
    direction: 'top right',
};
GrayTopRight.decorators = [ThemeDecorator(Theme.GRAY)];
