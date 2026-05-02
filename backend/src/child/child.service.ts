import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ChildService {
  constructor(private prisma: PrismaService) {}

  create(name: string, age: number, parentId: number) {
    return this.prisma.child.create({
      data: {
        name,
        age,
        parentId
      }
    })
  }

  findAll() {
    return this.prisma.child.findMany({
      include: {
        parent: true,
        mascots: true,
        sessions: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.child.findUnique({
      where: { id },
      include: {
        parent: true,
        mascots: true,
        sessions: true
      }
    })
  }

  update(id: number, data: any) {
    return this.prisma.child.update({
      where: { id },
      data
    })
  }

  delete(id: number) {
    return this.prisma.child.delete({
      where: { id }
    })
  }
}