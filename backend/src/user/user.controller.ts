import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body.email, body.password)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id))
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(Number(id))
  }
}