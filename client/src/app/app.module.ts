import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { InstituteDashboardModule } from './institute-dashboard/institute-dashboard.module';
import { NoticeDetailsModule } from './notice-details/notice-details.module';
import { EditNoticeModule } from './edit-notice/edit-notice.module';
import { CreateNoticeModule } from './create-notice/create-notice.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    NoticeDetailsModule,
    EditNoticeModule,
    InstituteDashboardModule,
    CreateNoticeModule,
    EditNoticeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
