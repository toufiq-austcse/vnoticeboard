import { Module } from '@nestjs/common';
import { InstituteController } from './institute.controller';
import { InstituteService } from './institute.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Institute from './institute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institute])],
  controllers: [InstituteController],
  providers: [InstituteService],
  exports: [InstituteService],
})
export class InstituteModule {}
