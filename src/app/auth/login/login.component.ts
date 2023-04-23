import { Component, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ErroAuthEn } from '../errorAuthEn';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = false;
  constructor(private authService: AuthService, private router: Router, private afs: AngularFireAuth){
    this.loginForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required])
      }
    )
  }
  ngOnInit() {
    this.afs.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });
  }
  onLogin(){
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).then(cred => {
      console.log(cred);
      this.router.navigate(["/home"]);
    }).catch(error => {
      alert(ErroAuthEn.convertMessage(error["code"]));
      console.log(error);
    });
  }
}
