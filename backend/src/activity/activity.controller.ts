import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { ActivityService } from './activity.service'

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  create(@Body() body: any) {
    return this.activityService.create(
      body.title,
      body.content,
      Number(body.journeyId)
    )
  }

  @Get()
  findAll() {
    return this.activityService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(Number(id))
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.activityService.update(Number(id), body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.activityService.delete(Number(id))
  }
}