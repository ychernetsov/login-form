import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/models';
import { loginSuccess } from 'src/app/store/actions/app.actions';

export function hasUniqueNumbers(input: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputValues = input.value.split('');
    const uniqueValues = new Set(inputValues);
    return inputValues.length === uniqueValues.size ? null : {nonUniqueNumbers: {value: control.value}};
  };
}

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
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), hasUniqueNumbers]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  onAuth() {
    if (this.authForm.valid) {
      this.store.dispatch(loginSuccess());
      this.router.navigate(['/repos']);
    }
  }
}
