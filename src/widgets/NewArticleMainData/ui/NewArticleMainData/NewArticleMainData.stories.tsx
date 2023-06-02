import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewArticleMainData } from './NewArticleMainData';

export default {
    title: 'shared/NewArticleMainData',
    component: NewArticleMainData,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NewArticleMainData>;

const Template: ComponentStory<typeof NewArticleMainData> = (args) => <NewArticleMainData {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
