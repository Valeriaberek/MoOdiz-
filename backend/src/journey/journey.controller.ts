import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { JourneyService } from './journey.service'
import { JwtAuthGuard } from '../auth/jwt.guard'

@Controller('journeys')
export class JourneyController {
  constructor(private readonly journeyService: JourneyService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any) {
    return this.journeyService.create(
      body.title,
      body.type,
      Number(body.duration)
    )
  }
  @UseGuards(JwtAuthGuard)        
  @Get()
  findAll() {
    return this.journeyService.findAll()
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.journeyService.findOne(Number(id))
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.journeyService.update(Number(id), body)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.journeyService.delete(Number(id))
  }
}