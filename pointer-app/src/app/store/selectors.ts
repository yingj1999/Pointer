import {PointerState} from './interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const currentState = createFeatureSelector<PointerState>('pointer');
export const currentUser=createSelector(currentState,(state:PointerState)=>state.currentUser);
export const currentUserReviews=createSelector(currentState,(state:PointerState)=>state.currentUserReviews);