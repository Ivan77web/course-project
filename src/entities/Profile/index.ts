import { Profile, ProfileSchema } from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard';

export {
    Profile,
    ProfileSchema,
    profileActions,
    profileReducer,
    fetchProfileData,
    ProfileCard,
};
