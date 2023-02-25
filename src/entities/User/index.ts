import { userActions, userReducer } from './modal/slice/userSlice';
import { User, UserSchema } from './modal/types/user';
import { getUserAuthData } from './modal/selectors/getUserAuthData/getUserAuthData';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
};
