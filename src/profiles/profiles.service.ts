import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID, UUID } from 'crypto';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { match } from 'assert';

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
        // throw new NotFoundException();
        const matchingProfile = this.profiles.find((profile) => profile.id === id);

        if (!matchingProfile) {
            throw new NotFoundException(`Profile with ID ${id} not found.`);
        }

        return matchingProfile;
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

        if(!matchingProfile) { 
            throw new NotFoundException(`Profile with id: ${id} not found.`); 
        }

        matchingProfile.name = updateProfileDTO.name;
        matchingProfile.description = updateProfileDTO.description;

        return matchingProfile;
    }

    deleteProfile(id: UUID) {
        const matchingProfileIndex = this.profiles.findIndex(
            (existingProfile) => existingProfile.id === id
        );

        // if(matchingProfileIndex > -1) {
        //     this.profiles.splice(matchingProfileIndex, 1);
        // } else {
        //     throw new NotFoundException(`Profile with id: ${id} not found.`); 
        // }

        if(matchingProfileIndex === -1) {
            throw new NotFoundException(`Profile with id: ${id} not found.`);
        }

        this.profiles.splice(matchingProfileIndex, 1);

        return {};
        
    }
}
