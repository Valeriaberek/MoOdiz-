import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class GuideService {
  constructor(private prisma: PrismaService) {}

  create(title: string, content: string, category: string = 'General') {
    return this.prisma.guide.create({
      data: {
        title,
        content,
        category    
      }
    })
  }

  findAll(category?: string) {
    if (category) {
      return this.prisma.guide.findMany({
        where: {
          category: category
        }
      })
    }

    return this.prisma.guide.findMany()
  }
}