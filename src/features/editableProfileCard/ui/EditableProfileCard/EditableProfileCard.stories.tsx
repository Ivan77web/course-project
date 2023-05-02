import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileErrors } from '../../model/consts/consts';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/profile/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

const dataUser = {
    id: '1',
    first: 'Ivan',
    lastname: 'Admin',
    age: 20,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'Ivan Ivan',
};

const defaultDataProfile = {
    readonly: false,
    data: dataUser,
    form: dataUser,
    error: undefined,
    isLoading: false,
};

const defaultUserData = {
    authData: {
        id: '1',
        username: 'admin',
    },
};

export const NormalAdmin = Template.bind({});
NormalAdmin.args = {};
NormalAdmin.decorators = [StoreDecorator({
    profile: defaultDataProfile,
    user: defaultUserData,
})];

export const NormalUser = Template.bind({});
NormalUser.args = {};
NormalUser.decorators = [StoreDecorator({
    profile: defaultDataProfile,
    user: {
        authData: {
            id: '2',
            username: 'admin',
        },
    },
})];

export const error = Template.bind({});
error.args = {};
error.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        error: 'error',
    },
    user: defaultUserData,
})];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        isLoading: true,
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectAge = Template.bind({});
validateErrorIncorrectAge.args = {};
validateErrorIncorrectAge.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectAvatar = Template.bind({});
validateErrorIncorrectAvatar.args = {};
validateErrorIncorrectAvatar.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.INCORRECT_AVATAR],
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectCity = Template.bind({});
validateErrorIncorrectCity.args = {};
validateErrorIncorrectCity.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.INCORRECT_CITY],
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectCountry = Template.bind({});
validateErrorIncorrectCountry.args = {};
validateErrorIncorrectCountry.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.INCORRECT_COUNTRY],
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectCurrency = Template.bind({});
validateErrorIncorrectCurrency.args = {};
validateErrorIncorrectCurrency.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.INCORRECT_CURRENCY],
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectNames = Template.bind({});
validateErrorIncorrectNames.args = {};
validateErrorIncorrectNames.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.INCORRECT_NAMES],
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectNoData = Template.bind({});
validateErrorIncorrectNoData.args = {};
validateErrorIncorrectNoData.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.NO_DATA],
    },
    user: defaultUserData,
})];

export const validateErrorIncorrectServerError = Template.bind({});
validateErrorIncorrectServerError.args = {};
validateErrorIncorrectServerError.decorators = [StoreDecorator({
    profile: {
        ...defaultDataProfile,
        validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    },
    user: defaultUserData,
})];
