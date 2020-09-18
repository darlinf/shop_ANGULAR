import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ICategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-edit-cactegory',
  templateUrl: './edit-cactegory.component.html',
  styleUrls: ['./edit-cactegory.component.css']
})
export class EditCactegoryComponent implements OnInit {

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

  editCategory(newCategory: ICategory){console.log(newCategory)
    this.categoryService.create(newCategory).subscribe(x => {
      this.route.navigate(["/Categories"])
    }, error => console.error(error))
  }
}
