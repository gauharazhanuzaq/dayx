import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../Services/items';
import { Item } from '../../Services/models';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css']
})
export class ItemDetailsComponent implements OnInit {
  item?: Item;
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private service: ItemsService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loading = true;
      this.service.getItemById(id).subscribe({
        next: res => {
          this.item = res;
          this.loading = false;
        },
        error: () => {
          this.error = 'Item not found';
          this.loading = false;
        }
      });
    }
  }

  goBack() {
    this.location.back();
  }
}
