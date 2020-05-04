import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
//import { RECIPES } from '../mock-recipes';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  //recipe='Indian Curry';
  /*recipe: Recipe = {
    id: 1,
    name: 'Indian Curry'
  };*/
  // recipes=RECIPES;
  
  recipes: Recipe[];
  
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService)  { }

  /* Synchronous way
  
  getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
  }*/

  // Asynchronous way

  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }
  
  
  ngOnInit(): void {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
