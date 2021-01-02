import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Food} from '../../data/food';
import {Recipe} from '../../data/recipe';

@Component({
  selector: 'app-food-recipes',
  templateUrl: './food-recipes.page.html',
  styleUrls: ['./food-recipes.page.scss'],
})
export class FoodRecipesPage implements OnInit {
  loadedFood: Food;
  recipes: Recipe[];

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('foodId')) {
        return;
      }
      const foodId = paramMap.get('foodId');
      console.log('loaded foodId' + foodId);
      this.loadedFood = this.dataService.getFood(foodId);
      console.log('loaded Food' + this.loadedFood.name);
      this.recipes = this.dataService.getRecipesByFoodId(foodId);
      console.log('loaded recipes' + this.recipes);

    });

  }
}
