import { createReducer, on } from '@ngrx/store';
import * as ItemsActions from './items.actions';
import { Item } from '../../../Services/models';

export interface ItemsState {
  items: Item[];
  selectedItem: Item | null;

  loadingList: boolean;
  listError: any;

  loadingDetails: boolean;
  detailsError: any;
}

export const initialState: ItemsState = {
  items: [],
  selectedItem: null,

  loadingList: false,
  listError: null,

  loadingDetails: false,
  detailsError: null,
};

export const itemsReducer = createReducer(
  initialState,

  on(ItemsActions.loadItems, (state) => ({
    ...state,
    loadingList: true,
    listError: null,
  })),

  on(ItemsActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    loadingList: false,
  })),

  on(ItemsActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    loadingList: false,
    listError: error,
  })),

  on(ItemsActions.loadItem, (state) => ({
    ...state,
    loadingDetails: true,
    detailsError: null,
  })),

  on(ItemsActions.loadItemSuccess, (state, { item }) => ({
    ...state,
    selectedItem: item,
    loadingDetails: false,
  })),

  on(ItemsActions.loadItemFailure, (state, { error }) => ({
    ...state,
    loadingDetails: false,
    detailsError: error,
  }))
);
