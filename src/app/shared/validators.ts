import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ForbiddenNameValidator(name: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = name.test(control.value.toLowerCase());
    return forbidden ? { 'forbiddenName' : { value: control.value } } : null;
  };
}

export function hasUniqueNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const inputValues = control.value.split('');
      const uniqueValues = new Set(inputValues);
      return inputValues.length === uniqueValues.size ? null : {'nonUniqueNumbers': {value: control.value}};
    };
  }

  export function matchPasswords(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const confirmed = control.get('confirmPassword').value;
      const password = control.get('password').value;
      return confirmed && password && confirmed === password ? null : {'passwordsNotMatch': true};
    };
  }