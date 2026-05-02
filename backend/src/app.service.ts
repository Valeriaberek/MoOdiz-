import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//C'est le cerveau de mon app: il contient la logique métier de mon app,
// c'est lui qui traite les données et retourne une réponse au controller.