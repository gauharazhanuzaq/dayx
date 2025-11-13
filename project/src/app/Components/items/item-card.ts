import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Item } from '../../Services/models';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="card">
      <img [src]="item.thumbnail" [alt]="item.title" class="card-img" />
      <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-desc">{{ item.description | slice:0:60 }}...</p>
      <a [routerLink]="['/items', item.id]" class="card-link">View Details</a>
    </div>
  `,
  styles: [`
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      padding: 1rem;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      text-align: center;
      color: #e16b17;
      transition: all 0.3s ease;
      cursor: pointer;
      animation: fadeIn 0.4s ease-in-out;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 35px rgba(235, 136, 37, 0.25);
      border-color: rgba(91, 51, 0, 0.3);
    }

    .card-img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .card-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #78380bff;
      margin: 0.3rem 0;
    }

    .card-desc {
      font-size: 0.95rem;
      color: #220e00ff;
      line-height: 1.3;
      margin-bottom: 0.8rem;
    }

    .card-link {
      display: inline-block;
      padding: 0.4rem 0.9rem;
      border-radius: 8px;
      background: rgba(235, 103, 37, 0.15);
      color: #973f00ff;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .card-link:hover {
      background: rgba(86, 35, 15, 0.25);
      box-shadow: 0 0 10px rgba(114, 52, 19, 0.25);
      transform: translateY(-2px);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ItemCardComponent {
  @Input() item!: Item;
}
