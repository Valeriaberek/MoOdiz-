import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});


// C'est un test unitaire pour le AppController.
// Il utilise le framework de test de NestJS pour créer une instance du 
// AppController et tester sa méthode getHello().
// Le test vérifie que la méthode getHello() retourne bien la chaîne de 
// caractères "Hello World!".