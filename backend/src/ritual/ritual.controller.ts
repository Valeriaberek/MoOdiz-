import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { RitualService } from './ritual.service'

@Controller('rituals')
export class RitualController {
  constructor(private readonly ritualService: RitualService) {}

  @Post()
  create(@Body() body: any) {
    return this.ritualService.create(
      body.title,
      body.instruction,
      Number(body.journeyId)
    )
  }

  @Get()
  findAll() {
    return this.ritualService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ritualService.findOne(Number(id))
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.ritualService.update(Number(id), body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ritualService.delete(Number(id))
  }
}