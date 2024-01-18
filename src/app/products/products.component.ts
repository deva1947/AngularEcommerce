import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { Status } from '../models/status';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
frm!:FormGroup;
//product:Product={id:0,productName:'',productImage:''};
imageFile?:File
status!:Status;
constructor(private productService:ProductService,private fb:FormBuilder){}
  get f(){
    return this.frm.controls;
  }
  onPost(){
    //console.log(this.frm.value);
    this.status={statusCode:0,message:'wait..'}
    this.status.statusCode=0;
    this.status.message="wait..";
    const frmData:Product=Object.assign(this.frm.value);
    frmData.imageFile=this.imageFile;
    this.productService.add(frmData).subscribe({
      next:(res)=>{
        this.status=res;
      },
      error:(err)=>{
        this.status.statusCode=0;
        this.status={statusCode:0,message:"error on servr side "};
        console.log(err);
      }

    })

  }
  onchange(event:any){
    this.imageFile=event.target.files[0];
    console.log(this.imageFile);

  }
  ngOnInit():void{
    this.frm=this.fb.group({
      'id':[0],
      'productName':['',Validators.required],
      'imageFile':[]
    })
  }
}

// import { Component } from '@angular/core';
// import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

// @Component({
//   selector: 'app-product',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent {
//   selectedFile: File | null = null;
//   private baseUrl = 'http://localhost:5285/api/AngularProduct';
//   constructor(private http: HttpClient) { }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   onAddProduct() {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('ImageFile', this.selectedFile);

//       this.http.post<any>(`${this.baseUrl}/Add`, formData, {
//         reportProgress: true,
//         observe: 'events'
//       }).subscribe(event => {
//         if (event.type === HttpEventType.UploadProgress) {
//           if (event.total !== undefined) {
//             const progress = Math.round(100 * event.loaded / event.total);
//             console.log(`Upload progress: ${progress}%`);
//           }
//         } else if (event.type === HttpEventType.Response) {
//           console.log('Product added successfully:', event.body);
//         }
//       }, error => {
//         console.error('Error adding product:', error);
//       });
//     }
//   }

//   onGetAllProducts() {
//     this.http.get<any>(`${this.baseUrl}/GetAll`)
//       .subscribe(products => {
//         console.log('Products:', products);
//       }, error => {
//         console.error('Error retrieving products:', error);
//       });
//   }
// }
