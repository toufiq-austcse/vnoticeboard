import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeDetailsComponent } from './notice-details.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [NoticeDetailsComponent],
  imports: [
    CommonModule,
    HeaderModule,

  ],
})
export class NoticeDetailsModule { }
