import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import { FurnitureDetails } from 'src/app/FurnitureDetails';
//import { OrderDetailsService} from 'src\app\Services\order-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
searchTerm: string='';
furnitureDetails: FurnitureDetails[] = [];

  constructor(private service:OrderDetailsService ){}
  frunitureData:any;
  ngOnInit(): void{
    this.furnitureDetails=this.service.frunitureDetials;

  }

}
