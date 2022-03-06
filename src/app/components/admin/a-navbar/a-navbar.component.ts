import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-navbar',
  templateUrl: './a-navbar.component.html',
  styleUrls: ['./a-navbar.component.scss']
})
export class ANavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('auth-user');
    localStorage.removeItem('auth-token');
    this.router.navigate([''])
  }
}
