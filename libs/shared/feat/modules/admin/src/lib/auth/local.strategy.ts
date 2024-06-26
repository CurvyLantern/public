import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

import { AuthService } from './auth.service'

@Injectable()
class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password'
    })
  }

  async validate(username: string, password: string) {
    return await this.authService.validateUser(username, password)
  }
}

export { LocalStrategy }
