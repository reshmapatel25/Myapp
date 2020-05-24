import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 /* constructor() { }
  
  getRecipes(): Observable<Recipe[]> {
  
    return of(RECIPES);
  }*/
  constructor(private messageService: MessageService) { }
  
  /*getRecipes(): Recipe[] {
    return RECIPES;
  }*/
  getRecipes(): Observable<Recipe[]> {
    // TODO: send the message _after_ fetching the Recipes
    this.messageService.add('RecipeService: fetched recipes');
    return of(RECIPES);
  }
  getRecipe(id: number): Observable<Recipe> {
    // TODO: send the message _after_ fetching the recipe
    this.messageService.add(`RecipeService: fetched recipe id=${id}`);
    return of(RECIPES.find(recipe => recipe.id === id));
  }
  
}

