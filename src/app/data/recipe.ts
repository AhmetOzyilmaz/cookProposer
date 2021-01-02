import {Thing} from './thing';
import {Portion} from './Portion';
import {Step} from './step';


export interface Recipe {
    id: string;
    name: string;
    imageUrl: string;
    items: Thing[];
    foodId: string;
    portion: Portion;
    steps: Step[];
}
