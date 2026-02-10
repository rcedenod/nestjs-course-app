import { IsString, MinLength } from "class-validator";

export class UpdateProfileDTO {
    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @MinLength(3)
    description: string;
}