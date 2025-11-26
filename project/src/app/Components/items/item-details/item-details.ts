import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../../../Services/models';
import { loadItem } from '../state/items.actions';
import { 
  selectSelectedItem, 
  selectItemLoading, 
  selectItemError 
} from '../state/items.selector';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css']
})
export class ItemDetailsComponent implements OnInit {
  item$!: Observable<Item | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private location: Location
  ) {}

  ngOnInit() {
    this.item$ = this.store.select(selectSelectedItem);
    this.loading$ = this.store.select(selectItemLoading);
    this.error$ = this.store.select(selectItemError);
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadItem({ id }));
    }
  }

  goBack() {
    this.location.back();
  }
}