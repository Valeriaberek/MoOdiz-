import { Module } from '@nestjs/common'
import { MascotService } from './mascot.service'
import { MascotController } from './mascot.controller'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule], // 🔥 OBLIGATOIRE
  controllers: [MascotController],
  providers: [MascotService]
})
export class MascotModule {}