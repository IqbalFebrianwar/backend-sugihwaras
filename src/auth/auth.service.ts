import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor (private userService : UserService){}

    async login(dto : AuthDto){
        const userUsername = await this.userService.findByUsername(dto.username)
        if(!userUsername){
            throw new UnauthorizedException("Username tidak ada")
        }
        return userUsername
    }
}
