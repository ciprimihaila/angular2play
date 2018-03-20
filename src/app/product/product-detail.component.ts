import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail'

    constructor(private _activeRoute: ActivatedRoute, private _router : Router){
        this.pageTitle += " " + this._activeRoute.snapshot.params['id'];
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}