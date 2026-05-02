import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { SessionService } from './session.service'
import { CreateSessionDto } from './dto/create-session.dto'
import { UpdateSessionDto } from './dto/update-session.dto'

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() dto: CreateSessionDto) {
    return this.sessionService.create(
      dto.parentId,
      dto.childId,
      dto.emotion
    )
  }

  @Get()
  findAll() {
    return this.sessionService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionService.findOne(Number(id))
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSessionDto) {
    return this.sessionService.update(Number(id), dto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sessionService.delete(Number(id))
  }
}