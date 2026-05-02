import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { JourneyService } from './journey.service'

@Controller('journeys')
export class JourneyController {
  constructor(private readonly journeyService: JourneyService) {}

  @Post()
  create(@Body() body: any) {
    return this.journeyService.create(
      body.title,
      body.type,
      Number(body.duration)
    )
  }

  @Get()
  findAll() {
    return this.journeyService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.journeyService.findOne(Number(id))
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.journeyService.update(Number(id), body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.journeyService.delete(Number(id))
  }
}