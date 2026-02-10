import { UUID } from 'crypto';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
export declare class ProfilesService {
    private profiles;
    getAllProfiles(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    }[];
    getProfileById(id: UUID): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    createProfile(createProfileDTO: CreateProfileDTO): {
        name: string;
        description: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    updateProfile(id: UUID, updateProfileDTO: UpdateProfileDTO): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    deleteProfile(id: UUID): {};
}
