import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  //recipe='Indian Curry';
  recipe: Recipe = {
    id: 1,
    name: 'Indian Curry'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
