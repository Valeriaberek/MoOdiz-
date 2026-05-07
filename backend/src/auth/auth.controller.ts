import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserService } from '../user/user.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.userService.create(registerDto.email, registerDto.password)
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto.email, loginDto.password)
  }
}
