import { Component, OnInit } from '@angular/core';
import { MockLoginUsersData } from 'src/app/login/userBase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users = [];
  userId = '';
  userPassword = '';
  isAuthenticated = false;
  showError = false;

  constructor(private readonly router: Router) { }

  ngOnInit() {
    MockLoginUsersData.forEach((user) => {
      this.users.push(user.userId);
    });
  }

  handleLogin() {
    const loginUserDataFiltered = MockLoginUsersData.filter((o) => {
      return (o.userId === this.userId);
    });

    if (loginUserDataFiltered.length === 1) {
      const userDetails = loginUserDataFiltered.map(o => {
        return {
          userId: o.userId,
          userFirstName: o.userFirstName,
          userLastName: o.userLastName
        }
      })
      localStorage.setItem('POC_DASHBOARD_TOKEN_KEY', JSON.stringify(userDetails));
      this.isAuthenticated = true;
      this.router.navigate(['/poc/dashboard/tab/1']);
    } else {
      this.isAuthenticated = false;
    }

    this.showError = !(this.isAuthenticated);
  }
}
