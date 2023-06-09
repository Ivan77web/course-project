import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RegestrationModal } from './RegestrationModal';

export default {
    title: 'features/RegestrationModal',
    component: RegestrationModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegestrationModal>;

const Template: ComponentStory<typeof RegestrationModal> = (args) => <RegestrationModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
