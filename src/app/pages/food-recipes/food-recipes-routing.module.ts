import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodRecipesPage } from './food-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: FoodRecipesPage
  },
  {
    path: ':recipeId',
    loadChildren: () => import('../recipes-detail/recipes-detail.module').then(m => m.RecipesDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRecipesPageRoutingModule {}
