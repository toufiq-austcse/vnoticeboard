import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteDashboardComponent } from './institute-dashboard.component';
import { HeaderModule } from '../header/header.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [InstituteDashboardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule,

  ],
})
export class InstituteDashboardModule { }
