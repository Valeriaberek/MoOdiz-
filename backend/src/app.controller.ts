import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

//C'est la porte d'entrée HTTP, il recoit les requtes et appel le service pour traiter 
// les données et retourner une réponse.
