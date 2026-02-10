import { Injectable } from '@nestjs/common';
import { randomUUID, UUID } from 'crypto';

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

    createProfile() {}
}
