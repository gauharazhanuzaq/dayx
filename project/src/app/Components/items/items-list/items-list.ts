import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ItemCardComponent } from '../item-card/item-card';
import { Item } from '../../../Services/models';
import { loadItems } from '../state/items.actions';
import { 
  selectItemsList, 
  selectItemsLoading, 
  selectItemsError 
} from '../state/items.selector';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['items-list.css']
})
export class ItemsListComponent implements OnInit {
  items$!: Observable<Item[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  
  query = '';
  searchChanged = new Subject<string>();
  

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.items$ = this.store.select(selectItemsList);
    this.loading$ = this.store.select(selectItemsLoading);
    this.error$ = this.store.select(selectItemsError);
    
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
    this.store.dispatch(loadItems({ query: this.query }));
  }
}