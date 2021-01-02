import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/foods',
    children: [
      {
        path: '',
        loadChildren: () => import('./foods/foods.module').then(m => m.FoodsPageModule)
      },
      {
        path: ':foodId',
        loadChildren: () => import('./pages/food-recipes/food-recipes.module').then(m => m.FoodRecipesPageModule)
      }

    ]
  },
  {
    path: 'recipes-detail',
    loadChildren: () => import('./pages/recipes-detail/recipes-detail.module').then( m => m.RecipesDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
