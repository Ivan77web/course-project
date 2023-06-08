import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RemoveNewArticleBlock } from './RemoveNewArticleBlock';

export default {
    title: 'features/RemoveNewArticleBlock',
    component: RemoveNewArticleBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RemoveNewArticleBlock>;

const Template: ComponentStory<typeof RemoveNewArticleBlock> = (args) => <RemoveNewArticleBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
