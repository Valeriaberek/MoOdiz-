import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class NotificationService {

  constructor(private prisma: PrismaService) {}

  create(userId: number, message: string) {
    return this.prisma.notification.create({
      data: {
        message,
        user: {
          connect: { id: userId }
        }
      }
    })
  }

  findAll() {
    return this.prisma.notification.findMany({
      include: {
        user: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.notification.findUnique({
      where: { id },
      include: {
        user: true
      }
    })
  }

  markAsRead(id: number) {
    return this.prisma.notification.update({
      where: { id },
      data: {
        isRead: true
      }
    })
  }

  delete(id: number) {
    return this.prisma.notification.delete({
      where: { id }
    })
  }
}