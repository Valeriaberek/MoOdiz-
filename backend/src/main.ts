import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // ✅ activation validation globale
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // supprime les champs non déclarés
      transform: true  // transforme les types (string -> number)
    })
  )

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()