import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/models';
import { ForbiddenNameValidator, hasUniqueNumbers, matchPasswords } from 'src/app/shared/validators';
import { loginSuccess } from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      name: new FormControl('', [Validators.required, ForbiddenNameValidator(/admin/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), hasUniqueNumbers()]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    },
    {
      validators: matchPasswords(),
      updateOn: 'change'
    })
  }

  onAuth() {
    if (this.authForm.valid) {
      this.store.dispatch(loginSuccess());
      this.router.navigate(['/repos']);
    }
  }
}
