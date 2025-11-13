import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../Services/items';
import { ItemCardComponent } from './item-card';
import { Item } from '../../Services/models';

@Component({
    selector: 'app-items-list',
    standalone: true,
    imports: [CommonModule, FormsModule, ItemCardComponent],
    templateUrl: './items-list.html',
    styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit {
    items: Item[] = [];
    query = '';
    loading = false;
    error = '';

    constructor(
        private itemsService: ItemsService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            this.query = params.get('q') || '';
            this.loadItems();
        });
    }

    onSearchChange() {
        this.router.navigate([], {
            queryParams: { q: this.query || null },
            queryParamsHandling: 'merge'
        });
    }

    loadItems() {
        this.loading = true;
        this.error = '';
        this.itemsService.getItems(this.query).subscribe({
            next: (res) => { this.items = res; this.loading = false; },
            error: () => { this.error = 'Failed to load items'; this.loading = false; }
        });
    }
}
