import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodsPage } from './foods.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FoodsPageRoutingModule } from './foods-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FoodsPageRoutingModule
  ],
  declarations: [FoodsPage]
})
export class FoodsPageModule {}
