import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    pageTitle: string = 'Product List';
    imageWidth:number= 20;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:string = '';

    private _productService;

    constructor(productService : ProductService) {
        this._productService = productService;
    }
    
    products: IProduct [];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('on init');
        this.products = this._productService.getProducts();
    }

    onNotify(message: string): void {
        this.pageTitle = "Product List " + message; 
    }
}