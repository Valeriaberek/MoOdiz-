import { Controller, Get, Post, Body, Query } from '@nestjs/common'
import { GuideService } from './guide.service'

@Controller('guides')
export class GuideController {
  constructor(private readonly guideService: GuideService) {}

  @Post()
  create(@Body() body: any) {
    return this.guideService.create(body.title, body.content, body.category)
  }

  @Get()
  findAll(@Query('category') category?: string) {
    return this.guideService.findAll(category)
  }
}