import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //product: any;
  frunitureData: any;
  service: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // Fetch the product data from API or assign it manually
    this.frunitureData=this.service.frunitureDetials;
  }

  addToCart() {
    this.cartService.addToCart(this.frunitureData);
  }
}
