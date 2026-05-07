import 'dotenv/config'
import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe, BadRequestException } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  // ✅ activation validation globale
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors.map(e => 
          Object.values(e.constraints || {}).join(', ')
        ).join('; ')
        return new BadRequestException({ error: messages })
      }
    })
  )

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()