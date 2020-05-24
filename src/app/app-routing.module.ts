import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent} from './recipes/recipes.component';
import { RecipeDetailComponent }  from './recipe-detail/recipe-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';


/*const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent }

];*/

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent }        ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
