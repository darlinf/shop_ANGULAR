import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ICategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoriesService) { }

  categories: ICategory[];

  ngOnInit() {
    this.getCategories();
  }

  deleteCategory(id: number){
    this.categoryService.delete(id).subscribe(x=>{this.getCategories()},error=>console.error(error))
  }

  getCategories(){
    this.categoryService.get().subscribe(x => {this.categories = x;},
      error => console.error(error))
  }
}
