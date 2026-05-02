import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class JourneyService {

  create(title: string, type: string, duration: number) {
    return prisma.journey.create({
      data: { title, type, duration }
    })
  }

  findAll() {
    return prisma.journey.findMany()
  }

  findOne(id: number) {
    return prisma.journey.findUnique({
      where: { id }
    })
  }

  update(id: number, data: any) {
    return prisma.journey.update({
      where: { id },
      data
    })
  }

  delete(id: number) {
    return prisma.journey.delete({
      where: { id }
    })
  }
}