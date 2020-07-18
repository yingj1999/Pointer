export interface ReviewStruct {
         reviewID: string;
         title: string;
         description: string;
         image: string;
         rating: number;
         tags: string[];
}
export interface ReviewArray {
    Items: ReviewStruct[];
}