import {Component} from '@angular/core';
import {Food} from '../data/food';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-foods',
  templateUrl: 'foods.page.html',
  styleUrls: ['foods.page.scss']
})
export class FoodsPage {
  foods: Food[];
  searchTerm: string;

  constructor(private dataService: DataService) {
    this.foods = dataService.getFoods();
  }

  public setFilterFoods() {
    this.foods = this.dataService.filterFoods(this.searchTerm);

  }
}
