import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): IProduct[]{
        let filter = args[0];//? args[0].toLocaleLowerCase() : null;
        if (filter != null) {
            return value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1)
        } else {
            return value;
        }
    }
}