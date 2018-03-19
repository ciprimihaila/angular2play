import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './product/product-list.component';
import { FormsModule } from '@angular/forms';
import {ProductFilterPipe} from './product/product-filter.pipe';
import {StarComponent} from './shared/start.component';
import { ProductService } from "./product/product.service";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product/product-detail.component'
import 'rxjs/Rx';

const appRoutes: Routes = [
  { path: 'products', component: ProductListComponent  },
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'welcome',  component: WelcomeComponent }, 
  { path: '',  redirectTo: '/welcome', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ProductService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
