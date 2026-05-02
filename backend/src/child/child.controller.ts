import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common'
import { ChildService } from './child.service'

@Controller('children')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  create(@Body() body: any) {
    return this.childService.create(
      body.name,
      Number(body.age),
      Number(body.parentId)
    )
  }

  @Get()
  findAll() {
    return this.childService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childService.findOne(Number(id))
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.childService.delete(Number(id))
  }
}