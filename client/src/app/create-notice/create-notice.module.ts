import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNoticeComponent } from './create-notice.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [CreateNoticeComponent],
  imports: [
    CommonModule,
    HeaderModule,
  ],
})
export class CreateNoticeModule { }
