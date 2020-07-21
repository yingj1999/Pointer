import {createReducer,Action,on} from '@ngrx/store';
import {PointerState} from './interface';
import * as Actions from './actions';
import {ReviewArray} from '../interfaces/review-struct';
import {User} from '../interfaces/user';

const initialState: PointerState={
    currentUser:null,
    currentUserReviews:null,
}
const pointerReducer = createReducer<PointerState>(
    initialState,
    on(Actions.setCurrentUser,(state: PointerState, currentUser:{currentUser:User})=>({
        ...state,
        ...currentUser,
    })),
    on(Actions.setCurrentUserReviews,(state: PointerState, currentUserReviews:{currentUserReviews:ReviewArray})=>({
        ...state,
        ...currentUserReviews,
    })),
);
    export function reducer(state:PointerState | undefined, action :Action):PointerState{
        return pointerReducer(state,action);
    }