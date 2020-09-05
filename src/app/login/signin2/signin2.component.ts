import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signin2',
  templateUrl: './signin2.component.html',
  styleUrls: ['./signin2.component.css']
})
export class Signin2Component implements OnInit {

  user = { }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
    signIn2() {
      this.authService.signIn2(this.user)
      .subscribe(
        res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/main']);
      },
      err => console.log(err)
    )
  }

}