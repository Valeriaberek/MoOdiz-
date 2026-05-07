import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email)

    if (!user) {
      return { error: 'Invalid credentials' }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return { error: 'Invalid credentials' }
    }

    const token = this.jwtService.sign({ id: user.id, email: user.email })
    return { access_token: token }
  }
}
