import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'fallback_secret'
    })
  }

  validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email
    }
  }
}

//vérifier et décoder le token JWT envoyé par le client,
//  et retourner les informations de l'utilisateur (userId et email)
//  qui seront utilisées dans les routes protégées.

// Client envoie token
//         ↓
// JwtStrategy le vérifie
//         ↓
// Il extrait les infos (user)
//         ↓
// Il les met dans req.user