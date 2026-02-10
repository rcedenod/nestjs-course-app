import { Injectable } from '@nestjs/common';
import { randomUUID, UUID } from 'crypto';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: 'Rafael',
            description: 'Ingeniero en computacion'
        },
        {
            id: randomUUID(),
            name: 'Isabella',
            description: 'Contadora'
        },
        {
            id: randomUUID(),
            name: 'Carolina',
            description: 'Comerciante'
        }
    ]

    getAllProfiles () {
        return this.profiles;
    }

    getProfileById (id: UUID) {
        return this.profiles.find((profile) => profile.id === id)
    }

    createProfile(createProfileDTO: CreateProfileDTO) {
        /*
        const profileId = randomUUID();
        this.profiles.push({ 
            id: profileId, 
            name: createProfileDTO.name, 
            description: createProfileDTO.description 
        });
        return profileId;
        */

        const createdProfile = {
            id: randomUUID(),
            ...createProfileDTO
        };

        this.profiles.push(createdProfile);
        return createdProfile;
    }

    updateProfile(id: UUID, updateProfileDTO: UpdateProfileDTO) {
        /*
        const profileIndex = this.profiles.findIndex((profile) => profile.id === id);
        const updatedProfile = {
            id,
            ...updateProfileDTO
        }
        this.profiles.splice(profileIndex, 1, updatedProfile);
        return updatedProfile;
        */

        const matchingProfile = this.profiles.find(
            (existingProfile) => existingProfile.id === id
        );

        if(!matchingProfile) { return {}; }

        matchingProfile.name = updateProfileDTO.name;
        matchingProfile.description = updateProfileDTO.description;

        return matchingProfile;
    }

    deleteProfile(id: UUID) {
        const matchingProfileIndex = this.profiles.findIndex(
            (existingProfile) => existingProfile.id === id
        );

        if(matchingProfileIndex > -1) {
            this.profiles.splice(matchingProfileIndex, 1);
        };

        return {};
        
    }
}
