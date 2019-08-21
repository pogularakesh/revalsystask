import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  arrProducts: any[];
  selectedLevel;
   products: any[] = [];
models=[]
types=[]
  constructor(private httpService: HttpClient) { }

  

  selected(val: any) {
    console.log(val)
    this.arrProducts.forEach((element) => {
      if (element.BrandName === val) {
        element.BrandProducts.forEach((elem) => {
          if (!this.products.includes(elem)) {
            this.products.push(elem);
            console.log(this.products)
          }
        });
      }
    });
  }
  selected1(val){
    alert(val)

    this.products.forEach((element) => {
      if (element.ProductType === val) {
        // element.products.forEach((eleme) => {
          if (!this.models.includes(element)) {
            this.models.push(element);
            console.log(this.models)
          }
        // });
      }
    });
  }

  onClick(val){
    console.log(val)

  }


  ngOnInit() {
    this.httpService.get('./assets/sampleData.json').subscribe(
      data => {
        this.arrProducts = data as string[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrProducts);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
