import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Inject('')
export class AuthService {

  constructor(private router: Router) { }

  login(userName: string): void {
    localStorage.setItem('user', userName);
    this.router.navigate(['/home']);
  }
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  isLogged(): boolean {
    return localStorage.getItem('user') !== null;
  }
  getLoggedUser(): string {
    return localStorage.getItem('user');
  }
}
