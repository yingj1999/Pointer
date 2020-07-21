import{props, createAction} from '@ngrx/store';
import {ReviewArray} from '../interfaces/review-struct';
import {User} from '../interfaces/user';

export const setCurrentUser=createAction('[Pointer] Set current user',props<{currentUser: User}>());
export const setCurrentUserReviews=createAction('[Pointer] Set current user reviews',props<{currentUserReviews: ReviewArray}>());