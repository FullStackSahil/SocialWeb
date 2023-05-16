import { Component, OnInit } from '@angular/core';
import { AccountService } from './../_services/account.service';
import {
  AbstractControl,
  FormGroup,
  ValidatorFn,
  Validators,
  FormControlDirective,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private accountService: AccountService) {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.matchValues('password'),
      ]),
      gender: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', Validators.required),
    });
    this.registerForm.controls['password'].valueChanges.subscribe(() => {
      this.registerForm.controls['confirmPassword'].updateValueAndValidity();
    });
  }
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
      // console.warn('Parent Control  ' + parent);
      // return null;

      // debugger;
      // const parent = control.parent;
      // if (parent) {
      //   const matchToControl = parent.controls[matchTo];
      //   if (matchToControl) {
      //     const isMatching = control.value === matchToControl.value;
      //     return isMatching ? null : { isMatching: true };
      //   }
      // }
      // return null;
    };
  }
  Register(): void {
    // console.log(this.registerForm.value);
    this.accountService.register(this.registerForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {}
}
