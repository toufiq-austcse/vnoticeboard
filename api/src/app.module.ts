import { Module } from '@nestjs/common';
import { InstituteModule } from './institute/institute.module';
import { NoticeModule } from './notice/notice.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
@Module({
  imports: [InstituteModule, NoticeModule, DatabaseModule,ConfigModule.forRoot(), AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
