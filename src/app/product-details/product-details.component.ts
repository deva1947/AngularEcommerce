// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.css']
// })
// export class ProductDetailsComponent {
//   // product: any = {};
//   // selectedFile: File | null = null;

//   // constructor(private http: HttpClient) { }

//   // onFileSelected(event: any) {
//   //   this.selectedFile = event.target.files[0];
//   // }

//   // uploadImage() {
//   //   if (this.selectedFile) {
//   //     const uploadData = new FormData();
//   //     uploadData.append('image', this.selectedFile, this.selectedFile.name);

//   //     this.http.post<any>('http://localhost:4100/upload-image', uploadData).subscribe(
//   //       (response) => {
//   //         // Assuming the server responds with the image URL
//   //         this.product.imageUrl = response.imageUrl;
//   //       },
//   //       (error) => {
//   //         console.log('Error uploading image:', error);
//   //       }
//   //     );
//   //   }

//   product: any; // Variable to store the product data

//   constructor(private http: HttpClient) {
//     this.getProductData();
//   }

//   getProductData() {
//     // Assuming you have a JSON server running at http://localhost:3000/products
//     const apiUrl = 'http://localhost:3000/products/1'; // Assuming you want to retrieve the product with ID 1

//     this.http.get(apiUrl)
//       .subscribe(
//         (response: any) => {
//           this.product = response;
//           console.log('Product data retrieved successfully!', this.product);
//         },
//         error => {
//           console.error('An error occurred while retrieving product data:', error);
//         }
//       );
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // Your component configuration
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
   styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: any; // Variable to store the product data

  constructor(private http: HttpClient) {
    this.getProductData();
  }

  getProductData() {
    // Assuming you have a JSON server running at http://localhost:3000/products
    const productId = 1; // Assuming you want to retrieve the product with ID 1
    const apiUrl = `http://localhost:4100/products`;
    //${productId}`;

    this.http.get(apiUrl)
      .subscribe(
        (response: any) => {
          this.product = response;
          console.log('Product data retrieved successfully!', this.product);
        },
        error => {
          console.error('An error occurred while retrieving product data:', error);
        }
      );
  }
}
