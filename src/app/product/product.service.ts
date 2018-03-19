import {Injectable} from "@angular/core";
import {IProduct} from './product';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private _productUrl ='api/products/products.json';

    constructor(private _http: HttpClient ){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
       // .map((response:Response) => <IProduct[]>response.json())
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
}