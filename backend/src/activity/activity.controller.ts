import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { ActivityService } from './activity.service'
import { JwtAuthGuard } from '../auth/jwt.guard'

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any) {
    return this.activityService.create(
      body.title,
      body.content,
      Number(body.journeyId)
    )
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.activityService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(Number(id))
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.activityService.update(Number(id), body)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.activityService.delete(Number(id))
  }
}