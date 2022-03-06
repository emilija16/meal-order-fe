import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { LoginDTO } from 'src/app/model/dto/LoginDTO';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TokenStorageService } from 'src/app/shared/services/auth/token-storage.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDTO: LoginDTO = {} as LoginDTO;
  decoded: any;
  errorMessage = false;
  form: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private toastr: ToastrService,
     private router: Router,
     private formBuilder: FormBuilder
      ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
          ]
        ],
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.loginDTO.email);
    console.log(this.loginDTO.password);
    this.loginDTO.email = this.form.value.email;
    this.loginDTO.password = this.form.value.password;
    console.log(this.loginDTO)
    // if (this.form.invalid) {
    //   this.toastr.error(  "Invalid data!", 'Login');
    //   return;
    // }
    // else {
      this.errorMessage = false;
      this.authService.login(this.loginDTO).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.decoded = jwtDecode(JSON.stringify(data.token))
          console.log(this.decoded)
          this.toastr.success('Login Success', 'Success');
          if(this.decoded.authorities[0] === environment.roleAdmin) {
            this.router.navigate(['/admin']);
          } else if (this.decoded.authorities[0] === environment.roleUser) {
            this.router.navigate(['/user']);
          }
        },
        error => {
          this.toastr.error('Sign In Failed!', 'Error');
        }
      );
    
  }
}