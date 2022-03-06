import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/User.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = {} as User;
  form: FormGroup = new FormGroup({});
  submitted = false;
  invalidData = false;

  constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
          ]
        ],
        phoneNumber: ['', Validators.required]
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log(this.user)
    this.submitted = true;

    console.log(this.user)
    console.log(this.form.invalid)
    if (this.form.invalid) {
      this.invalidData = true
      this.toastr.error(  "Invalid data!", 'Registration');
      return;
    }
    this.user.firstName = this.form.value.firstName;
    this.user.lastName = this.form.value.lastName;
    this.user.email = this.form.value.email;
    this.user.phoneNumber = this.form.value.phoneNumber;
    this.user.username = this.form.value.username;
    this.user.password = this.form.value.password;
    this.authService.register(this.user).subscribe(user => {
    user = this.user;
    console.log(user)
    this.toastr.success("Your account has been successfully created!", 'Success');
    },
    error => {
      this.toastr.error('Sign Up Failed!', 'Error')
      console.log(error)
    })
  }
}