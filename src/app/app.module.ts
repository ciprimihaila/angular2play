import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './product/product-list.component';
import { FormsModule } from '@angular/forms';
import {ProductFilterPipe} from './product/product-filter.pipe';
import {StarComponent} from './shared/start.component';
import { ProductService } from "./product/product.service";
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
