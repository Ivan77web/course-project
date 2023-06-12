import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { NewUserActions, getNewUserAll } from '@/entities/NewUser';
import { User } from '@/entities/User';
import { CheckUsername } from '../../types/RegestrationModalSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const registrationNewUser = createAsyncThunk<User | CheckUsername, void, ThunkConfig<string>>(
    'registrationModal/registrationNewUser',
    async (_, thunkApi) => {
        const {
            dispatch, extra, rejectWithValue, getState,
        } = thunkApi;
        const newUser = getNewUserAll(getState());

        const profile = {
            first: newUser?.first,
            lastname: newUser?.lastname,
            age: newUser?.age,
            currency: newUser?.currency,
            country: newUser?.country,
            city: newUser?.city,
            username: newUser?.username,
            avatar: newUser?.avatar,
        };

        const user = {
            username: newUser?.username,
            password: newUser?.password,
            avatar: newUser?.avatar,
            roles: newUser?.roles,
            features: {
                isAppRedesigned: true,
            },
            jsonSettings: {
                isFirstVisit: true,
                isArticlePageWasOpened: false,
            },
        };

        try {
            const responseUsername = await extra.api.post<CheckUsername>('/checkUsername', { username: user.username });

            if (responseUsername.data.message === 'success') {
                dispatch(NewUserActions.setFreeUsername(true));

                const responseUser = await extra.api.post<User>('/users', user);

                if (!responseUser.data) {
                    throw new Error();
                }

                const responseProfile = await extra.api.post<User>('/profile', {
                    id: responseUser.data.id,
                    ...profile,
                });

                if (!responseProfile.data) {
                    throw new Error();
                }

                if (responseUser.data && responseProfile.data) {
                    dispatch(NewUserActions.setOnSuccess(true));
                }
            } else {
                dispatch(NewUserActions.setFreeUsername(false));
            }

            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            return responseUsername.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
