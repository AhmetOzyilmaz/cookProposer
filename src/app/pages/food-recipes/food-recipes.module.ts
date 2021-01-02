import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodRecipesPageRoutingModule } from './food-recipes-routing.module';

import { FoodRecipesPage } from './food-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodRecipesPageRoutingModule
  ],
  declarations: [FoodRecipesPage]
})
export class FoodRecipesPageModule {}
