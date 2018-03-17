export interface IProduct {
    
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;

   // calculateDiscount(percent: number) : number;
}

export class Product implements IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
   // calculateDiscount(percent: number): number {
     //   throw new Error("Method not implemented.");
    //}

}