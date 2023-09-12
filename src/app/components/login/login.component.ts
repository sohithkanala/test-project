import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { LocalStorageService } from 'src/app/services/localStorage/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthenticationService
  ) {}

  login(): void {
    const userCred = this.loginForm.getRawValue()!;
    if (!userCred.username) {
      return alert('User email must be provided!');
    }
    if (!userCred.password) {
      return alert('User password must be provided!');
    }
    this.authService.login(userCred).subscribe((res: any) => {
      if (!res.accessToken && res.status !== 200) {
        return alert(res.msg);
      }
      this.localStorageService.setKey("userToken", res.accessToken);
    });
  }
}
