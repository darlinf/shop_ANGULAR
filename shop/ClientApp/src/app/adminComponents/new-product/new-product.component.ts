import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/models/icategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: Router
    ) {
      this.productService.getProductAndService().subscribe(x =>{ this.categories = x; console.log(this.categories) })
     }

  rForm: FormGroup;
  categories: ICategory[];

  ngOnInit() {
    this.rForm = this.fb.group({
      name:[null, Validators.required],
      price:[null, Validators.required],
      image:[null, Validators.required],
      stock:[null, Validators.required],
      categoryId:[null, Validators.required]
    }) 
  }

  newProduct(product: IProduct){
    product.categoryId= parseInt(""+product.categoryId)
    this.productService.create(product).subscribe(x => {this.route.navigate(["/Products"])}, error => console.error(error));
    
  }

}
