import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    getProfiles(): {
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
