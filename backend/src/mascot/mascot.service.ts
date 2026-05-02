import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class MascotService {
  constructor(private prisma: PrismaService) {}

  create(name: string, ageStage: number, childId: number) {
    return this.prisma.mascot.create({
      data: {
        name,
        ageStage,
        childId
      }
    })
  }

  findAll() {
    return this.prisma.mascot.findMany({
      include: {
        child: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.mascot.findUnique({
      where: { id },
      include: {
        child: true
      }
    })
  }

  update(id: number, ageStage: number) {
    return this.prisma.mascot.update({
      where: { id },
      data: { ageStage }
    })
  }

  delete(id: number) {
    return this.prisma.mascot.delete({
      where: { id }
    })
  }
}