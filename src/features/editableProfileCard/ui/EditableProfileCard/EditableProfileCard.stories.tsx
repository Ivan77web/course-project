import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileErrors } from '../../model/consts/consts';
import { EditableProfileCard } from './EditableProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/Profile/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;
const TemplateRedesigned: ComponentStory<typeof EditableProfileCard> = (args) => (
    <div className="app_redesigned">
        <EditableProfileCard {...args} />
    </div>
);

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

export const NormalAdminDark = Template.bind({});
NormalAdminDark.args = {};
NormalAdminDark.decorators = [
    StoreDecorator({
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.DARK),
];

export const NormalAdminOptionalBg = Template.bind({});
NormalAdminOptionalBg.args = {};
NormalAdminOptionalBg.decorators = [
    StoreDecorator({
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.GRAY),
];

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

export const NormalAdminRedesigned = TemplateRedesigned.bind({});
NormalAdminRedesigned.args = {};
NormalAdminRedesigned.decorators = [
    StoreDecorator({
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const NormalAdminRedesignedDark = TemplateRedesigned.bind({});
NormalAdminRedesignedDark.args = {};
NormalAdminRedesignedDark.decorators = [
    StoreDecorator({
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.DARK),
    NewDesignDecorator,
];

export const NormalAdminRedesignedOptionalBg = TemplateRedesigned.bind({});
NormalAdminRedesignedOptionalBg.args = {};
NormalAdminRedesignedOptionalBg.decorators = [
    StoreDecorator({
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.GRAY),
    NewDesignDecorator,
];

export const NormalUserRedesigned = TemplateRedesigned.bind({});
NormalUserRedesigned.args = {};
NormalUserRedesigned.decorators = [
    StoreDecorator({
        profile: defaultDataProfile,
        user: {
            authData: {
                id: '2',
                username: 'admin',
            },
        },
    }),
    NewDesignDecorator,
];

export const errorRedesigned = TemplateRedesigned.bind({});
errorRedesigned.args = {};
errorRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            error: 'error',
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const isLoadingRedesigned = TemplateRedesigned.bind({});
isLoadingRedesigned.args = {};
isLoadingRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            isLoading: true,
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectAgeRedesigned = TemplateRedesigned.bind({});
validateErrorIncorrectAgeRedesigned.args = {};
validateErrorIncorrectAgeRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectAvatarRedesigned = Template.bind({});
validateErrorIncorrectAvatarRedesigned.args = {};
validateErrorIncorrectAvatarRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.INCORRECT_AVATAR],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectCityRedesigned = Template.bind({});
validateErrorIncorrectCityRedesigned.args = {};
validateErrorIncorrectCityRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.INCORRECT_CITY],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectCountryRedesigned = Template.bind({});
validateErrorIncorrectCountryRedesigned.args = {};
validateErrorIncorrectCountryRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.INCORRECT_COUNTRY],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectCurrencyRedesigned = Template.bind({});
validateErrorIncorrectCurrencyRedesigned.args = {};
validateErrorIncorrectCurrencyRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.INCORRECT_CURRENCY],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectNamesRedesigned = Template.bind({});
validateErrorIncorrectNamesRedesigned.args = {};
validateErrorIncorrectNamesRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.INCORRECT_NAMES],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectNoDataRedesigned = Template.bind({});
validateErrorIncorrectNoDataRedesigned.args = {};
validateErrorIncorrectNoDataRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.NO_DATA],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const validateErrorIncorrectServerErrorRedesigned = Template.bind({});
validateErrorIncorrectServerErrorRedesigned.args = {};
validateErrorIncorrectServerErrorRedesigned.decorators = [
    StoreDecorator({
        profile: {
            ...defaultDataProfile,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        },
        user: defaultUserData,
    }),
    NewDesignDecorator,
];
