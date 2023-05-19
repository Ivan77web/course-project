import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';
import { UserRole } from './model/consts/consts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInit } from './model/selectors/getUserInit/getUserInit';
import { isUserAdmin, isUserManager, getUserRole } from './model/selectors/roleSelectors';
import { useJsonSettings } from './model/selectors/jsonSettings';
import { initAuthData } from './model/services/initAuthData';
import { saveJsonSettings } from './model/services/saveJsonSettings';

export {
    userReducer,
    userActions,
    getUserAuthData,
    getUserInit,
    isUserAdmin,
    isUserManager,
    UserRole,
    getUserRole,
    useJsonSettings,
    saveJsonSettings,
    initAuthData,
};

export type { User };
export type { UserSchema };
