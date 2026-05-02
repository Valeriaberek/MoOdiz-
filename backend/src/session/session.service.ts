import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  create(parentId: number, childId: number, emotion?: string) {
    const normalizedEmotion = emotion ?? ''

    return this.prisma.session.create({
      data: {
        parentId,
        childId,
        emotion: normalizedEmotion,
      }
    })
  }

  findAll() {
    return this.prisma.session.findMany({
      include: {
        parent: true,
        child: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.session.findUnique({
      where: { id },
      include: {
        parent: true,
        child: true
      }
    })
  }

  update(id: number, data: { emotion?: string }) {
    return this.prisma.session.update({
      where: { id },
      data
    })
  }

  delete(id: number) {
    return this.prisma.session.delete({
      where: { id }
    })
  }
}