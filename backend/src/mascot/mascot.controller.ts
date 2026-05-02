import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { MascotService } from './mascot.service'

@Controller('mascots')
export class MascotController {
  constructor(private readonly mascotService: MascotService) {}

  @Post()
  create(@Body() body: any) {
    return this.mascotService.create(
      body.name,
      Number(body.ageStage),
      Number(body.childId)
    )
  }

  @Get()
  findAll() {
    return this.mascotService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotService.findOne(Number(id))
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.mascotService.update(
      Number(id),
      Number(body.ageStage)
    )
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.mascotService.delete(Number(id))
  }
}