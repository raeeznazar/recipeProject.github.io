import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Zinger Burger',
      'Yummy chicken zinger burgers!',
      'https://www.wikihow.com/images/thumb/e/e4/Make-Zinger-Burgers-Step-15.jpg/v4-460px-Make-Zinger-Burgers-Step-15.jpg',
      [new ingredients('Meat', 1), new ingredients('French Fries', 20)]
    ),
    new Recipe(
      'Ginger-Sesame Steamed Vegetable Salad',
      'Healthy salad !',
      'https://cdn3.tmbi.com/toh/GoogleImagesPostCard/Ginger-Sesame-Steamed-Vegetable-Salad_exps173348_TH132104D06_28_3bC_RMS.jpg',
      [
        new ingredients('carrot', 5),
        new ingredients('cuccumber', 2),
        new ingredients('Avacado', 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  ///here calling method in shopping-list.service
  addToShoppingList(ingredients: ingredients[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
