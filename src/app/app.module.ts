import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AppService } from './services/app.service';
import { ChildOfChildComponent } from './components/child-of-child/child-of-child.component';
import { ReposComponent } from './components/repos/repos.component';
import { OwnersComponent } from './components/owners/owners.component';
import { ReposChildComponent } from './components/repos-child/repos-child.component';
import { OwnersChildComponent } from './components/owners-child/owners-child.component';
import { someReducer } from './store/reducers/app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppEffects } from './store/effects/app.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({app: someReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  declarations: [
    AppComponent,
    AuthFormComponent,
    ChildOfChildComponent,
    ReposComponent,
    OwnersComponent,
    ReposChildComponent,
    OwnersChildComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
