import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="nav">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/items" routerLinkActive="active">Items</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
  `,
  styles: [`
    .nav {
      display: flex;
      gap: 1.5rem;
      padding: 0.8rem 1.5rem;
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 16px;
      margin: 1rem auto;
      width: fit-content;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .nav a {
      text-decoration: none;
      color: #1f2937;
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s ease;
      padding: 0.4rem 0.6rem;
      border-radius: 8px;
    }

    .nav a:hover {
      background: rgba(255, 255, 255, 0.25);
      color: #2d106dff;
      transform: translateY(-1px);
    }

    .active {
      color: #C79BC2;
      background: rgba(255, 255, 255, 0.35);
      box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
    }
  `]
})
export class NavbarComponent { }
