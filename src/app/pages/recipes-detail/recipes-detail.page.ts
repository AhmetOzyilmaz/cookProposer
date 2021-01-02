import {Component, OnInit} from '@angular/core';
import {Thing} from '../../data/thing';
import {Recipe} from '../../data/recipe';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Step} from '../../data/step';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {
  loadedRecipe: Recipe;
  things: Thing[];
  steps: Step[];

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('foodId')) {
        return;
      }
      const foodId = paramMap.get('foodId');
      const recipeId = paramMap.get('recipeId');

      console.log('loaded foodId ' + foodId);
      console.log('loaded recipeId ' + recipeId);
      this.loadedRecipe = this.dataService.getRecipesById(recipeId);
      console.log('loaded recipe ' + this.loadedRecipe.name);
      this.things = this.loadedRecipe.items;
      this.steps = this.loadedRecipe.steps;
    });

  }

}
