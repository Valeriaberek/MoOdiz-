import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ActivityService {

  create(title: string, content: string, journeyId: number) {
    return prisma.activity.create({
      data: {
        title,
        content,
        journeyId
      }
    })
  }

  findAll() {
    return prisma.activity.findMany({
      include: {
        journey: true
      }
    })
  }

  findOne(id: number) {
    return prisma.activity.findUnique({
      where: { id },
      include: {
        journey: true
      }
    })
  }

  update(id: number, data: any) {
    return prisma.activity.update({
      where: { id },
      data
    })
  }

  delete(id: number) {
    return prisma.activity.delete({
      where: { id }
    })
  }
}