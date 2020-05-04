import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  
  getRecipes(): Recipe[] {
    return RECIPES;
  }
  
}
