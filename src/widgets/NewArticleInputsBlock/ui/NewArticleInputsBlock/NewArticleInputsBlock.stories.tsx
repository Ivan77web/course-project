import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewArticleInputsBlock } from './NewArticleInputsBlock';

export default {
    title: 'shared/NewArticleInputsBlock',
    component: NewArticleInputsBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NewArticleInputsBlock>;

const Template: ComponentStory<typeof NewArticleInputsBlock> = (args) => <NewArticleInputsBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
