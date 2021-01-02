import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FoodsPage} from './foods.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsPage,
  },
  {
    path: ':foodId',
    loadChildren: () => import('../pages/food-recipes/food-recipes.module').then(m => m.FoodRecipesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsPageRoutingModule {
}
