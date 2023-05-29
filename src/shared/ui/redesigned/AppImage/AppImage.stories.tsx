// @ts-nocheck
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage/AppImageRedesigned',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: 'https://sun9-79.userapi.com/impg/tRxej3Q1HTz4NAgsFDR2nlFni-I4PYgQqhiV3w/VI2RqkRijKE.jpg?size=960x960&quality=95&sign=79f905338520287eb55a728d93e1c100&type=album',
};
