import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  
  getRecipes(): Observable<Recipe[]> {
  
    return of(RECIPES);
  }
  
  /*getRecipes(): Recipe[] {
    return RECIPES;
  }*/
  
}
