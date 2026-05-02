import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class RitualService {
  constructor(private prisma: PrismaService) {}

  create(title: string, instruction: string, journeyId: number) {
    return this.prisma.ritual.create({
      data: {
        title,
        instruction,
        journeyId
      }
    })
  }

  findAll() {
    return this.prisma.ritual.findMany({
      include: {
        journey: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.ritual.findUnique({
      where: { id },
      include: {
        journey: true
      }
    })
  }

  update(id: number, data: any) {
    return this.prisma.ritual.update({
      where: { id },
      data
    })
  }

  delete(id: number) {
    return this.prisma.ritual.delete({
      where: { id }
    })
  }
}