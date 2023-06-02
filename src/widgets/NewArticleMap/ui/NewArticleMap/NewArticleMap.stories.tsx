import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewArticleMap } from './NewArticleMap';

export default {
    title: 'shared/NewArticleMap',
    component: NewArticleMap,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NewArticleMap>;

const Template: ComponentStory<typeof NewArticleMap> = (args) => <NewArticleMap {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
