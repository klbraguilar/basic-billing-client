import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  columnsToDisplay: string[] = ['id', 'name'];
  categories:Category[] = []
  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(data => {
      this.categories = data;
      console.log(data)
    })
  }

}
