import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
    constructor (private authService : AuthService){}

    @Post('login')
    async login(@Body() dto : AuthDto){
        const userLogin = await this.authService.login(dto)
        return userLogin
    }
}
