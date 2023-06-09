// @ts-nocheck
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegistrationForm } from './RegistrationForm';

export default {
    title: 'shared/RegistrationForm',
    component: RegistrationForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => <RegistrationForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
