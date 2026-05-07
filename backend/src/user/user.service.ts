import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(email: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      return await this.prisma.user.create({
        data: { email, password: hashedPassword }
      })
    } catch (error) {
      return { error: 'User already exists' }
    }
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email }
    })
  }
}
