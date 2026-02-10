import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus} from '@nestjs/common';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
    constructor (private profilesService: ProfilesService) {

    }
    @Get() // con query param
    getProfiles() {
        return this.profilesService.getAllProfiles();
    }

    @Get(':id') // sin query param 
    getProfileById(@Param('id') id: UUID) {
        return this.profilesService.getProfileById(id);
    }

    @Post()
    createProfile(@Body() createProfileDTO: CreateProfileDTO) {
        return {
            name: createProfileDTO.name,
            description: createProfileDTO.description
        };
    }

    @Put(':id')
    updateProfile(
        @Param('id') id: string,
        @Body() updateProfileDTO: UpdateProfileDTO
    ) {
        return {
            id: id,
            ...updateProfileDTO
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    removeProfile(@Param('id') id: string) {}

}
