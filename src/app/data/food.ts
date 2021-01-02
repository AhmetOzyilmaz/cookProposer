import {Recipe} from './recipe';


export interface Food {
    id: string;
    name: string;
    imageUrl: string;
    recipes: Recipe[];
}
