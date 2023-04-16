import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
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

// const smallArgs = {
//     items: [
//         { value: 'Первый вариант', content: '1' },
//         { value: 'Второй вариант', content: '2' },
//         { value: 'Третий вариант', content: '3' },
//         { value: 'Четвертый вариант', content: '4' },
//         { value: 'Пятый вариант', content: '5' },
//     ],
//     value: 'Второй вариант',
//     defaultValue: 'Первый вариант',
//     onChange: () => { },
//     readonly: false,
//     label: 'Выберите значение',
// };

export const NormalBottom = Template.bind({});
NormalBottom.args = {
    ...defaultArgs,
    direction: 'bottom',
};

export const NormalTop = Template.bind({});
NormalTop.args = {
    ...defaultArgs,
    direction: 'top',
};

export const DarkBottom = Template.bind({});
DarkBottom.args = {
    ...defaultArgs,
    direction: 'bottom',
};
DarkBottom.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTop = Template.bind({});
DarkTop.args = {
    ...defaultArgs,
    direction: 'top',
};
DarkTop.decorators = [ThemeDecorator(Theme.DARK)];

export const GrayBottom = Template.bind({});
GrayBottom.args = {
    ...defaultArgs,
    direction: 'bottom',
};
GrayBottom.decorators = [ThemeDecorator(Theme.GRAY)];

export const GrayTop = Template.bind({});
GrayTop.args = {
    ...defaultArgs,
    direction: 'top',
};
GrayTop.decorators = [ThemeDecorator(Theme.GRAY)];

// export const smallBottom = Template.bind({});
// GrayBottom.args = {
//     ...defaultArgs,
//     direction: 'bottom',
// };
// GrayBottom.decorators = [ThemeDecorator(Theme.GRAY)];

// export const smallTop = Template.bind({});
// GrayTop.args = {
//     ...defaultArgs,
//     direction: 'top',
// };
// GrayTop.decorators = [ThemeDecorator(Theme.GRAY)];
