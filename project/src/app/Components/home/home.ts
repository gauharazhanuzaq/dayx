import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <div class="home-card">
        <img [src]="photoUrl" alt="My Photo" class="profile-photo" />
        <h1>Welcome to <span>my store</span></h1>
        <p>
          Discover and explore a curated collection of quality products that fit your style.
        </p>
        <a routerLink="/items" class="browse-btn">Browse Items</a>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      padding: 1rem;
      animation: fadeIn 0.6s ease-in-out;
    }

    .home-card {
      text-align: center;
      padding: 2.5rem;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      color: #111827;
    }
    .profile-photo {
      width: 300px;
      height: 370px;
    }
    h1 {
      font-size: 2.2rem;
      font-weight: 700;
      color: #152c50ff;
      margin-bottom: 1rem;
    }

    h1 span {
      color: #152c50ff;
    }

    p {
      font-size: 1.1rem;
      color: #374151;
      margin-bottom: 2rem;
      line-height: 1.5;
    }

    .browse-btn {
      display: inline-block;
      background: #A7C1EC;
      color: #30376dff;
      padding: 0.8rem 1.6rem;
      border-radius: 12px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(37, 99, 235, 0.3);
    }

    .browse-btn:hover {
      background: #a3bae9ff;
      transform: translateY(-3px);
      box-shadow: 0 6px 18px rgba(84, 136, 248, 0.25);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HomeComponent {
  photoUrl = 'assets/store-svgrepo-com.svg';
}
