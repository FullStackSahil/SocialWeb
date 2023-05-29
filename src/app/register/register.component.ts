import { Component, OnInit } from '@angular/core';
import { AccountService } from './../_services/account.service';
import {
  AbstractControl,
  FormGroup,
  ValidatorFn,
  Validators,
  FormControlDirective,
  FormControl,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  maxDate: Date;
  constructor(private formBuilder: FormBuilder) {
    this.initializeFormWithFormBuilder();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  // initializeFormWithFormGroup() {
  //   this.registerForm = new FormGroup({
  //     Name: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(5),
  //       Validators.maxLength(10),
  //     ]),
  //     confirmPassword: new FormControl('', [
  //       Validators.required,
  //       this.matchValues('password'),
  //     ]),
  //     gender: new FormControl('', [Validators.required]),
  //     city: new FormControl('', [Validators.required]),
  //     country: new FormControl('', Validators.required),
  //   });
  //   this.registerForm.controls['password'].valueChanges.subscribe(() => {
  //     this.registerForm.controls['confirmPassword'].updateValueAndValidity();
  //   });
  // }

  initializeFormWithFormBuilder() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      confirmPassword: [
        null,
        [Validators.required, this.matchValues('password')],
      ],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      city: ['', Validators.required],
      country: ['', Validators.required],
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
    console.log(this.registerForm.value);
    // this.accountService.register(this.registerForm.value).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  ngOnInit(): void {}
}
