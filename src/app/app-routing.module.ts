import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { OwnersComponent } from './components/owners/owners.component';
import { ReposComponent } from './components/repos/repos.component';
import { AppGuard } from './guards/app.guard';
import { AppResolver } from './resolvers/app.resolver';
import { OwnersResolver } from './resolvers/owners.resolver';
import { ReposResolver } from './resolvers/repos.resolver';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthFormComponent,
    // canActivate: [AppGuard],
    pathMatch: 'full',
  },
  {
    path: 'repos',
    component: ReposComponent,
    canActivate: [AppGuard],
    resolve: [ReposResolver],
    pathMatch: 'full',
  },
  {
    path: 'owners',
    component: OwnersComponent,
    canActivate: [AppGuard],
    resolve: [OwnersResolver],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
