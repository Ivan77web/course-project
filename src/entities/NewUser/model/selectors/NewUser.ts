import { StateSchema } from '@/app/providers/StoreProvider';

export const getNewUserAll = (state: StateSchema) => state.newUser;
export const getNewUserUsername = (state: StateSchema) => state.newUser?.username;
export const getNewUserPassword = (state: StateSchema) => state.newUser?.password;
export const getNewUserRoles = (state: StateSchema) => state.newUser?.roles;
export const getNewUserFeatures = (state: StateSchema) => state.newUser?.features;
export const getNewUserAvatar = (state: StateSchema) => state.newUser?.avatar;
export const getNewUserFirst = (state: StateSchema) => state.newUser?.first;
export const getNewUserLastname = (state: StateSchema) => state.newUser?.lastname;
export const getNewUserAge = (state: StateSchema) => state.newUser?.age;
export const getNewUserCurrency = (state: StateSchema) => state.newUser?.currency;
export const getNewUserCountry = (state: StateSchema) => state.newUser?.country;
export const getNewUserCity = (state: StateSchema) => state.newUser?.city;
