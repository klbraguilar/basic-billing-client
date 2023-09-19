import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.minLength(2)])
  });
  stylingMode = "underlined";
  category?: Category;
  constructor(private router:Router, private categoryService:CategoryService) { }

  ngOnInit(): void {
    setTimeout(() => validationEngine.validateGroup());
  }

  async AddCategory(){
    this.category = new Category(
      this.categoryForm.value.name
    );
    console.log(this.category)
    this.categoryService.createCategory(this.category).subscribe(data =>{
      notify('Agregado correctamente.', 'success');
      console.log(data);
      this.router.navigate(["listcat"]);
    })
  }

}
