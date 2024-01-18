import { Component, OnInit } from '@angular/core';
import { FurnitureDetails } from 'src/app/FurnitureDetails';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
// @import class CartService {
//   constructor(parameters) {
//     addToCart()
//   }
// }
export class MenuComponent implements OnInit{
  furnitureDetails: FurnitureDetails[] = [];

  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {
    this.orderDetailsService.getFurnitureDetails().subscribe(
      (details: FurnitureDetails[]) => {
        this.furnitureDetails = details;
      },
      (error: any) => {
        console.error('Error fetching furniture details:', error);
      }
    );
    }
  // constructor(private service:OrderDetailsService){ }

  // frunitureData:any;
  // ngOnInit(): void{
  //   this.frunitureData=this.service.frunitureDetials;

  // }
  // addToCart() {
  //   this.CartService.addToCart(this.frunitureData);
  // }

}
