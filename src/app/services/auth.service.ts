import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn2(user) {
   return this.http.post<any>(this.URL + '/signin2', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin2'])
  }
}
