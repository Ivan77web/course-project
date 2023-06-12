import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewUserSchema } from '../types/NewUserSchema';
import { UserRole } from '@/entities/User';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const initialState: NewUserSchema = {
    username: '',
    password: '',
    roles: [UserRole.USER],
    features: [],
    avatar: undefined,
    first: undefined,
    lastname: undefined,
    age: undefined,
    currency: undefined,
    country: undefined,
    city: undefined,
    freeUsername: true,
    onSuccess: false,
};

export const NewUserSlice = createSlice({
    name: 'NewUser',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setRoles: (state, action: PayloadAction<UserRole[]>) => {
            state.roles = action.payload;
        },
        setFeatures: (state, action: PayloadAction<FeatureFlags[]>) => {
            state.features = action.payload;
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload;
        },
        setFirst: (state, action: PayloadAction<string>) => {
            state.first = action.payload;
        },
        setLastname: (state, action: PayloadAction<string>) => {
            state.lastname = action.payload;
        },
        setAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload;
        },
        setCurrency: (state, action: PayloadAction<Currency>) => {
            state.currency = action.payload;
        },
        setCountry: (state, action: PayloadAction<Country>) => {
            state.country = action.payload;
        },
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        setFreeUsername: (state, action: PayloadAction<boolean>) => {
            state.freeUsername = action.payload;
        },
        setOnSuccess: (state, action: PayloadAction<boolean>) => {
            state.onSuccess = action.payload;
        },
        reset: (state) => {
            state = {
                username: '',
                password: '',
                roles: [UserRole.USER],
                features: [],
                avatar: undefined,
                first: undefined,
                lastname: undefined,
                age: undefined,
                currency: undefined,
                country: undefined,
                city: undefined,
                freeUsername: true,
                onSuccess: false,
            };
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: NewUserActions } = NewUserSlice;
export const { reducer: NewUserReducer } = NewUserSlice;
