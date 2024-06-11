import { IsString, IsNotEmpty } from "class-validator";

export class AuthDto {
    @IsString()
    @IsNotEmpty()
    username: string;
}