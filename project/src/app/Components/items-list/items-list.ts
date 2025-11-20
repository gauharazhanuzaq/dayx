import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../Services/items';
import { ItemCardComponent } from '../item-card/item-card';
import { Item } from '../../Services/models';
import { Subject, debounceTime } from 'rxjs';

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
    searchChanged = new Subject<string>();
    constructor(
        private itemsService: ItemsService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.searchChanged
            .pipe(debounceTime(300))
            .subscribe(value => {
                this.router.navigate([], {
                    queryParams: { q: value || null },
                    queryParamsHandling: 'merge'
                });
            });

        this.route.queryParamMap.subscribe(params => {
            this.query = params.get('q') || '';
            this.loadItems();
        });
    }

    onSearchChange() {
        this.searchChanged.next(this.query);
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
