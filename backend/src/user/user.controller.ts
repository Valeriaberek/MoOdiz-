import { Controller, Post, Body } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: { email: string; password: string }) {
    return await this.userService.create(body.email, body.password)
  }
}