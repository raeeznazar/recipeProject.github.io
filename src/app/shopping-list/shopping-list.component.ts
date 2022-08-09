import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingListService } from '../services/shopping-list.service';
import { ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: ingredients[] = [
    // new ingredients('apples', 5),
    // new ingredients('tomato', 10),
    // new ingredients('potatto', 6),
  ];

  private igChangeSub: Subscription = new Subscription();

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangeSub = this.shoppingService.ingredientChanged.subscribe(
      (ingredients: ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(ingredientData: ingredients) {
    this.ingredients.push(ingredientData);
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub?.unsubscribe;
  }
}
