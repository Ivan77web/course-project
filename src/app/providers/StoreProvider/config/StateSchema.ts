import { counterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
