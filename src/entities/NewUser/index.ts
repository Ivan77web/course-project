import { getNewUserAll } from './model/selectors/NewUser';
import { NewUserReducer, NewUserActions } from './model/slices/NewUserSlice';

export type { NewUserSchema } from './model/types/NewUserSchema';
export {
    getNewUserAll,
    NewUserReducer,
    NewUserActions,
};
