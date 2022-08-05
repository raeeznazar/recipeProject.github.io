import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredients[] = [
    // new ingredients('apples', 5),
    // new ingredients('tomato', 10),
    // new ingredients('potatto', 6),
  ];

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged.subscribe(
      (ingredients: ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(ingredientData: ingredients) {
    this.ingredients.push(ingredientData);
  }
}
