import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNoticeComponent } from './edit-notice.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [EditNoticeComponent],
  imports: [
    CommonModule,
    HeaderModule,
  ],
})
export class EditNoticeModule { }
