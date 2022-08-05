import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}


  /// exporting to receipe.service file
  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
