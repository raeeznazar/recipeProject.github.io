import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index:number | undefined;




  constructor() {}

  ngOnInit(): void {}
  
}
