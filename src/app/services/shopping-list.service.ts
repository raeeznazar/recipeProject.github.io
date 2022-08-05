import { EventEmitter, Injectable } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<ingredients[]>();
  private ingredients: ingredients[] = [
    new ingredients('apples', 5),
    new ingredients('tomato', 10),
    new ingredients('potatto', 6),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }
  ingredientAdded(ingredient: ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
