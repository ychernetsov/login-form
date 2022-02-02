import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { OwnersComponent } from './components/owners/owners.component';
import { RepoDetailsComponent } from './components/repos-child/repo-details/repo-details.component';
import { ReposChildComponent } from './components/repos-child/repos-child.component';
import { ReposComponent } from './components/repos/repos.component';
import { AppGuard } from './guards/app.guard';
import { AppResolver } from './resolvers/app.resolver';
import { fetchOwners, fetchRepos } from './store/actions/app.actions';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthFormComponent,
    // canActivate: [AppGuard],
    pathMatch: 'full',
  },
  {
    path: 'repos',
    loadChildren: () =>
      import('./components/repos/repos.module').then(m => m.ReposModule),
    // canActivate: [AppGuard],
    resolve: {
      repos: AppResolver.use({name: fetchRepos})
    },
    pathMatch: 'full',
  },
  {
    path: 'repos/:id',
    component: RepoDetailsComponent,
    // canActivate: [AppGuard],
  },
  {
    path: 'owners',
    component: OwnersComponent,
    canActivate: [AppGuard],
    resolve: {
      owners: AppResolver.use({name: fetchOwners})
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
