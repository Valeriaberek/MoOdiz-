import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common'
import { GuideService } from './guide.service'
import { JwtAuthGuard } from '../auth/jwt.guard'

@Controller('guides')
export class GuideController {
  constructor(private readonly guideService: GuideService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any) {
    return this.guideService.create(
      body.title,
      body.content,
      body.category
    )
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query('category') category?: string) {
    return this.guideService.findAll(category)
  }
}