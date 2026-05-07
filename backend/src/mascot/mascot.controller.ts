import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { MascotService } from './mascot.service'
import { JwtAuthGuard } from '../auth/jwt.guard'

@Controller('mascots')
export class MascotController {
  constructor(private readonly mascotService: MascotService) {}

   @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any) {
    return this.mascotService.create(
      body.name,
      Number(body.ageStage),
      Number(body.childId)
    )
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.mascotService.findAll()
  }

  
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotService.findOne(Number(id))
  }

 @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.mascotService.update(
      Number(id),
      Number(body.ageStage)
    )
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.mascotService.delete(Number(id))
  }
}