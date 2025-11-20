import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth';
import { AsyncPipe } from '@angular/common';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe],
  templateUrl:'./profile.html',
  styleUrl:'./profile.css'
})
export class ProfileComponent implements OnInit {
  user$!: Observable<User | null>;

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
    ngOnInit() {
    this.user$ = this.auth.currentUser$;
  }
}
