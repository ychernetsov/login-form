import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { AppGuard } from './guards/app.guard';

const routes: Routes = [
  {
    path: 'app-login',
    component: LoginComponent,
    canActivate: [AppGuard],
    pathMatch: 'full',
  },
  {
    path: 'app-admin-form',
    component: AdminFormComponent,
    canActivate: [AppGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
