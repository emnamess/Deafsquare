import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]],
      birthday: [''],

      phoneNumber: ["", [Validators.required, this.validatePhoneNumber]]
    }, { validators: this.passwordMatchValidator });
  }
  

  // Custom validator function to compare passwords
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsNotMatch: true };
  }
  validatePhoneNumber(control: AbstractControl) {
    const phoneNumber = control.value;
    if (!phoneNumber || /^[0-9]+$/.test(phoneNumber)) {
      return null; // Return null if the input is valid
    } else {
      return { invalidPhoneNumber: true }; // Return an error object if the input is invalid
    }
  }
}
