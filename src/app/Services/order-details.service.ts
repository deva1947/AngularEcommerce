import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { Observable, of } from 'rxjs';
import { FurnitureDetails } from '../FurnitureDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  frunitureDetials: any;

  constructor() { }

  //frunituredetails
  private furnitureDetails: FurnitureDetails[] = [
  //frunitureDetials=[
  {
    id:1,
    frunitureName:"Dinning table",
    frunitureDetials:"Wooden",
    price:8000,
    FrunitureImg:"https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id:2,
    frunitureName:"chair",
    frunitureDetials:"Wooden",
    price:6000,
    FrunitureImg:"https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id:3,
    frunitureName:"sofa",
    frunitureDetials:"Wooden",
    price:6000,
    FrunitureImg:"https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:4,
    frunitureName:"sofa",
    frunitureDetials:"2-seat Orange Leather Sofa Beside Wall",
    price:5000,
    FrunitureImg:"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:5,
    frunitureName:"Dinnning tabble ",
    frunitureDetials:"clasic table",
    price:10000,
    FrunitureImg:"https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg"
  },
  {
    id:6,
    frunitureName:"Bed",
    frunitureDetials:"clasic Bed",
    price:10000,
    FrunitureImg:"https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  ]
   getFurnitureDetails(): Observable<FurnitureDetails[]> {
    return of(this.furnitureDetails);
  }

  getFurnitureDetailsPromise(): Promise<FurnitureDetails[]> {
    return Promise.resolve(this.furnitureDetails);
  }
}
