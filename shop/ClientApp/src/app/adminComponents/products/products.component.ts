import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: IProduct[];
  ngOnInit() {
    this.getProduct();
  }

  deleteProduct(id: number){
    this.productService.delete(id).subscribe(x => {}, error=> console.error(error),()=>{this.getProduct()});
  }

  getProduct(){
    this.productService.get().subscribe(data => {
      this.products = data;
    });
  }
}
