import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodRecipesPage } from './food-recipes.page';

describe('FoodRecipesPage', () => {
  let component: FoodRecipesPage;
  let fixture: ComponentFixture<FoodRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
