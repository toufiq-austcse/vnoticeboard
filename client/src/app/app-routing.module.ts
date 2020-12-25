import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';
import { NoticeDetailsComponent } from './notice-details/notice-details.component';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { EditNoticeComponent } from './edit-notice/edit-notice.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: InstituteDashboardComponent,
  },
  {
    path: 'details',
    component: NoticeDetailsComponent,
  },
  {
    path: 'create',
    component: CreateNoticeComponent,
  },
  {
    path: 'edit',
    component: EditNoticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
