import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taborApp';
  loggedInUser?: firebase.default.User | null;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(
      (user) => {
        this.loggedInUser = user;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.authService
      .logout()
      .then(() => {
        console.log('Logged out successfully.');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
