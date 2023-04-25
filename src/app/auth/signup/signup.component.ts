import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErroAuthEn } from '../errorAuthEn';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private snackbar: MatSnackBar, private router: Router){
    this.signupForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required])
      }
    )
  }
  
  
  onSignUp(){
    this.authService.signup(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value).then(cred => {
      console.log(cred);
      this.router.navigate(["home"]);
    }).catch(error => {
      this.snackbar.open(ErroAuthEn.convertMessage(error["code"]), 'OK', {duration: 2000});
      console.log(error);
    });
  }
}
