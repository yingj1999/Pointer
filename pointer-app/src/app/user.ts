import {ReviewStruct} from './review-struct'
export class User {
    constructor(
        public username: string,
        public firstName: string,
        public imageUrl: string,
        public reviewsList: ReviewStruct[]
    ){}
}