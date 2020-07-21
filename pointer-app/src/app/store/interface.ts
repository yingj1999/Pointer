import {ReviewArray} from '../interfaces/review-struct';
import {User} from '../interfaces/user';
export interface PointerState{
    currentUser: User;
    currentUserReviews: ReviewArray;
}