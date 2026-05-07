import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { ChildService } from './child.service'
import { JwtAuthGuard } from '../auth/jwt.guard'

@Controller('children')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any) {
    return this.childService.create(
      body.name,
      Number(body.age),
      Number(body.parentId)
    )
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.childService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childService.findOne(Number(id))
  }

  @UseGuards(JwtAuthGuard)  
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.childService.delete(Number(id))
  }
}