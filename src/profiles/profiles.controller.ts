import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, NotFoundException, ParseUUIDPipe, ValidationPipe} from '@nestjs/common';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
    constructor (private profilesService: ProfilesService) {}

    @Get() // con query param
    getProfiles() {
        return this.profilesService.getAllProfiles();
    }

    @Get(':id') // sin query param 
    getProfileById(@Param('id', ParseUUIDPipe) id: UUID) {
        try {
            return this.profilesService.getProfileById(id);
        } catch (error) {
            throw new NotFoundException(error.message);
            // if error instanceof DatabaseException) {
            //     throw new NotFoundException();
            // }
        }
        
        // throw new NotFoundException();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createProfile(@Body() createProfileDTO: CreateProfileDTO) {
        return this.profilesService.createProfile(createProfileDTO);
    }

    @Put(':id')
    updateProfile(
        @Param('id', ParseUUIDPipe) id: UUID,
        @Body() updateProfileDTO: UpdateProfileDTO
    ) {
        return this.profilesService.updateProfile(id, updateProfileDTO)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteProfile(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesService.deleteProfile(id);
    }
}
