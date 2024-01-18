import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupgeComponent } from './pages/menupge/menupge.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProductsComponent } from './products/products.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupgeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login', component: LoginComponent },
  {path:'cart',component: CartComponent},
  {path:'app-product-details',component:ProductDetailsComponent},
  {path:'file-upload',component:FileUploadComponent},
  {path:'products',component:ProductsComponent},
  {path:'display-products',component:DisplayProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
