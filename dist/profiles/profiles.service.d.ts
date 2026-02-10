import { UUID } from 'crypto';
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
    } | undefined;
    createProfile(): void;
}
