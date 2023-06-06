import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultipleTabs } from './MultipleTabs';

export default {
    title: 'shared/MultipleTabs',
    component: MultipleTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MultipleTabs>;

const Template: ComponentStory<typeof MultipleTabs> = (args) => <MultipleTabs {...args} />;

// const tabs = [
//     { value: '1', content: <p>1</p> },
//     { value: '2', content: <p>2</p> },
//     { value: '3', content: <p>3</p> },
// ];

// const [valueTest, setValue] = useState<string[]>(['1', '2']);

// const onTabClick = (value: string) => {
//     let arr = [...valueTest];

//     if (valueTest.includes(value)) {
//         const myIndex = valueTest.indexOf(value);
//         arr.splice(myIndex, 1);
//     } else {
//         arr = [...valueTest, value];
//     }

//     setValue(arr);
// };

// export const Light = Template.bind({});
// Light.args = {
//     tabs: { tabs },
//     value: { valueTest },
//     onTabClick: {(value) => onTabClick(value.value),
// };
// Light.decorators = [ThemeDecorator(Theme.LIGHT)];

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

// export const OptionalBg = Template.bind({});
// OptionalBg.args = {};
// OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const Light = Template.bind({});
Light.args = {};
