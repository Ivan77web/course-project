// @ts-nocheck
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateArticlePage } from './CreateArticlePage';

export default {
    title: 'shared/CreateArticlePage',
    component: CreateArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CreateArticlePage>;

const Template: ComponentStory<typeof CreateArticlePage> = (args) => <CreateArticlePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
