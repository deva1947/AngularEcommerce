import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OrderDetailsService } from 'src/app/Services/order-details.service';

@Component({
  selector: 'app-menupge',
  templateUrl: './menupge.component.html',
  styleUrls: ['./menupge.component.css']
})
export class MenupgeComponent implements OnInit {
  constructor(private param:ActivatedRoute,private service:OrderDetailsService){}
  getMenuId:any;
  menuData:any;
  ngOnInit(): void{
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData=this.service.frunitureDetials.filter((value: { id: any; })=>{
       return value.id == this.getMenuId;
      });
      console.log(this.menuData,'menudata>>');
    }
  }
}
