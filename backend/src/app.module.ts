import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChildModule } from './child/child.module';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { MascotModule } from './mascot/mascot.module';
import { JourneyModule } from './journey/journey.module';
import { ActivityModule } from './activity/activity.module';
import { RitualModule } from './ritual/ritual.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotificationModule } from './notification/notification.module';
import { GuideModule } from './guide/guide.module';



@Module({
  imports: [ChildModule, UserModule, SessionModule, MascotModule, JourneyModule,
     ActivityModule, RitualModule, PrismaModule, NotificationModule, GuideModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// C'est le centre de mon app:
// il sert a : declarer les controllers, decraler les services,
//  et d'importer les modules de mon app.