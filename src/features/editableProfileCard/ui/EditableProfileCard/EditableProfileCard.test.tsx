import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'Ivan',
    lastname: 'Admin',
    username: 'Ivan Admin',
    age: 20,
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.RUB,
    avatar: 'linklinklink',
};

const options = {
    initialState: {
        profile: {
            form: profile,
            data: profile,
            error: undefined,
            isLoading: false,
            readonly: true,
        },
        user: {
            authData: {
                id: '1',
                username: 'Ivan Admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Появление кнопок отмены и сохранения при нажатии на кнопку редактирования', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();
    });

    test('После нажатия на кнопку отмены все измененные значения в инпутах должны обнулиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('');

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'testName');
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'testLastname');

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('testName');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('testLastname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Ivan');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Admin');
    });

    test('Срабатывание ошибок валидации', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Успешное отправление данных', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        const mockPutReq = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'New name');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
