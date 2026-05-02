import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { NotificationService } from './notification.service'

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() body: any) {
    return this.notificationService.create(
      Number(body.userId),
      body.message
    )
  }

  @Get()
  findAll() {
    return this.notificationService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(Number(id))
  }

  @Put(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.notificationService.markAsRead(Number(id))
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notificationService.delete(Number(id))
  }
}