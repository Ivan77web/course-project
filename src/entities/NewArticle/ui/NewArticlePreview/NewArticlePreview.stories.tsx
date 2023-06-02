import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewArticlePreview } from './NewArticlePreview';

export default {
    title: 'shared/NewArticlePreview',
    component: NewArticlePreview,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NewArticlePreview>;

const Template: ComponentStory<typeof NewArticlePreview> = (args) => <NewArticlePreview {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
