import { userActions, userReducer } from './modal/slice/userSlice';
import { User, UserSchema } from './modal/types/user';
import { UserRole } from './modal/consts/consts';
import { getUserAuthData } from './modal/selectors/getUserAuthData/getUserAuthData';
import { getUserInit } from './modal/selectors/getUserInit/getUserInit';
import { isUserAdmin, isUserManager, getUserRole } from './modal/selectors/roleSelectors';

export {
    userReducer,
    userActions,
    getUserAuthData,
    getUserInit,
    isUserAdmin,
    isUserManager,
    UserRole,
    getUserRole,
};

export type { User };
export type { UserSchema };
