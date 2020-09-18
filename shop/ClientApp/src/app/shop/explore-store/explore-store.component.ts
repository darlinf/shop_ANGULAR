import { Component, OnInit, Host, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ICategory } from '../../models/icategory';
import { StoreComponent } from '../store/store.component';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-explore-store',
  templateUrl: './explore-store.component.html',
  styleUrls: ['./explore-store.component.css']
})
export class ExploreStoreComponent implements OnInit {

  constructor( private categoryService: CategoriesService, @Host() private ooo: StoreComponent ) { }

  categories: ICategory[];
  categoriesFilter: ICategory[];
  search = new FormControl('');
  
  @Output('search') searchEmitter = new EventEmitter<string>();

  ngOnInit() {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.searchEmitter.emit(value))
    this.categoryService.get().subscribe( x => {this.categories = x; },error => console.error(error) )
  }

  firterCategory(id: number){
    this.categoryService.categoryFilter(id).subscribe(x => {
      this.categoriesFilter = x;
      this.ooo.categoryAndProduct = this.categoriesFilter;
    },error=>console.log(error));
      
  }


}
