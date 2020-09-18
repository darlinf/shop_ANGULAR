import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/models/icategory';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoriesService,
    private route: Router
    ) { }

  rForm: FormGroup;

  ngOnInit() {
    this.rForm = this.fb.group({
      nombre:[null, Validators.required],
      status:[null, Validators.required],
      image:[null]
    })
  }

  newCategory(newCategory: ICategory){console.log(newCategory)
    this.categoryService.create(newCategory).subscribe(x => {
      this.route.navigate(["/Categories"])
    }, error => console.error(error))
  }
}
