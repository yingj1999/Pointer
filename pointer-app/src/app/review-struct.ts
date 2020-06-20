export class ReviewStruct {
    constructor(
        public reviewID: string,
        public title: string,
        public description: string,
        public image: string,
        public rating: number,
        public tags: [string]
    ){}
}
