import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-navbar',
  templateUrl: './u-navbar.component.html',
  styleUrls: ['./u-navbar.component.scss']
})
export class UNavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('auth-user');
    localStorage.removeItem('auth-token');
    this.router.navigate([''])
  }
}
