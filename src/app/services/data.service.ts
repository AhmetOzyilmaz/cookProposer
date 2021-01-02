import {Injectable} from '@angular/core';
import {Food} from '../data/food';
import {Recipe} from '../data/recipe';
import {QuantityType} from '../data/QuantityType';
import {Portion} from '../data/Portion';

// @ts-ignore
@Injectable({
    providedIn: 'root'
})
export class DataService {
    private recipes: Recipe[] = [
        {
            id: '1',
            name: 'Domates Yumurta ',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
            items: [
                {
                    name: 'yumurta',
                    imagesUrl: [
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                    ],
                    quantity: 2,
                    quantityType: QuantityType.PIECE

                },
                {
                    name: 'domates',
                    imagesUrl: [
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                    ],
                    quantity: 2,
                    quantityType: QuantityType.PIECE

                }
            ],
            foodId: '1',
            portion: Portion.TWO,
            steps: [
                {
                    description: 'Domatesler tercihe kalmış olarak rendelenir yada kabukları soyulup küçük küçük doğranır…'
                },
                {
                    description: 'Teflon bir tavada tereyağ eritilir.Eriyen yağa rende domatesler eklenir. ..Domatesin üstüne tuz ve karabiber eklendikten sonra tavada ki domates karıştırılır. . Tavanın kapağı yarım kapatılarak (5-6 dakika) domatesler orta ateşte pişirilir. Bu sürede domatesler suyunu salar çok hafiften sularını tekrar çeker ,hafiften pişer ( domatesin ilk çiğliği kalmaz)..'
                },
                {
                    description: 'Yumurtalar bir kasede çırpılır ..yumurtalar hafifçe suyunu  çekmiş,hafifçe pişmiş domateslerin üstüne  boca edilir.Ocağın altı bir tık kısılır…Tahta bir kaşıklar tavada ki domates ve yumurta 1 dakikaya yakın arada sırada karıştırılır…. Süre sonunda ocağın altında ki ateş kısılır. Tavanın üstü (çok hafif aralık kalacak şekilde) bir kapak ile kapatılır….( ben bu aşamadan sonra  tavaya bir daha kaşık sokmuyorum tavada ki malzeme pişene kadar bir daha karıştırmıyorum)'
                },
                {
                    description: 'Kısık ateşte yumurtanın beyazları pişene  kadar beklenir… Beyazlar pişerken tavada ki domates  yer yer göz göz olur pıt pıt atar :))). İşlem tamam.. taze taze çıtır ekmek ve iyi demlenmiş bir çay eşliğinde tadına doyum olmaz domatesli yumurtanızı sıcak sıcak servis edebilirsiniz… Afiyetler olsun. ..'
                }
            ]
        },
        {
            id: '2',
            name: 'Biber Yumurta',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-4.jpg',
            items: [
                {
                    name: 'b',
                    imagesUrl: [
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                    ],
                    quantityType: QuantityType.PIECE,
                    quantity: 2

                }
            ],
            foodId: '2',
            portion: Portion.TWO,
            steps: [
                {
                    description: 'Biber tercihe kalmış olarak rendelenir yada kabukları soyulup küçük küçük doğranır…'
                },
                {
                    description: 'Teflon bir tavada tereyağ eritilir.Eriyen yağa rende biber eklenir. ..Domatesin üstüne tuz ve karabiber eklendikten sonra tavada ki domates karıştırılır. . Tavanın kapağı yarım kapatılarak (5-6 dakika) domatesler orta ateşte pişirilir. Bu sürede biber suyunu salar çok hafiften sularını tekrar çeker ,hafiften pişer ( domatesin ilk çiğliği kalmaz)..'
                },
                {
                    description: 'Yumurtalar bir kasede çırpılır ..yumurtalar hafifçe suyunu  çekmiş,hafifçe pişmiş domateslerin üstüne  boca edilir.Ocağın altı bir tık kısılır…Tahta bir kaşıklar tavada ki domates ve yumurta 1 dakikaya yakın arada sırada karıştırılır…. Süre sonunda ocağın altında ki ateş kısılır. Tavanın üstü (çok hafif aralık kalacak şekilde) bir kapak ile kapatılır….( ben bu aşamadan sonra  tavaya bir daha kaşık sokmuyorum tavada ki malzeme pişene kadar bir daha karıştırmıyorum)'
                },
                {
                    description: 'Kısık ateşte yumurtanın beyazları pişene  kadar beklenir… Beyazlar pişerken tavada ki domates  yer yer göz göz olur pıt pıt atar :))). İşlem tamam.. taze taze çıtır ekmek ve iyi demlenmiş bir çay eşliğinde tadına doyum olmaz domatesli yumurtanızı sıcak sıcak servis edebilirsiniz… Afiyetler olsun. ..'
                }
            ]
        },
        {
            id: '3',
            name: 'Patlıcan Yumurta',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-2.jpg',
            items: [
                {
                    name: 'c',
                    imagesUrl: [
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                    ],
                    quantityType: QuantityType.PIECE,
                    quantity: 2


                }
            ],
            foodId: '3',
            portion: Portion.TWO,
            steps: [
                {
                    description: 'Patlıcan tercihe kalmış olarak rendelenir yada kabukları soyulup küçük küçük doğranır…'
                },
                {
                    description: 'Teflon bir tavada tereyağ eritilir.Eriyen yağa rende biber eklenir. ..Domatesin üstüne tuz ve karabiber eklendikten sonra tavada ki domates karıştırılır. . Tavanın kapağı yarım kapatılarak (5-6 dakika) domatesler orta ateşte pişirilir. Bu sürede biber suyunu salar çok hafiften sularını tekrar çeker ,hafiften pişer ( domatesin ilk çiğliği kalmaz)..'
                },
                {
                    description: 'Yumurtalar bir kasede çırpılır ..yumurtalar hafifçe suyunu  çekmiş,hafifçe pişmiş domateslerin üstüne  boca edilir.Ocağın altı bir tık kısılır…Tahta bir kaşıklar tavada ki domates ve yumurta 1 dakikaya yakın arada sırada karıştırılır…. Süre sonunda ocağın altında ki ateş kısılır. Tavanın üstü (çok hafif aralık kalacak şekilde) bir kapak ile kapatılır….( ben bu aşamadan sonra  tavaya bir daha kaşık sokmuyorum tavada ki malzeme pişene kadar bir daha karıştırmıyorum)'
                },
                {
                    description: 'Kısık ateşte yumurtanın beyazları pişene  kadar beklenir… Beyazlar pişerken tavada ki domates  yer yer göz göz olur pıt pıt atar :))). İşlem tamam.. taze taze çıtır ekmek ve iyi demlenmiş bir çay eşliğinde tadına doyum olmaz domatesli yumurtanızı sıcak sıcak servis edebilirsiniz… Afiyetler olsun. ..'
                }
            ]
        },
        {
            id: '4',
            name: 'Soğanlı Yumurta',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-3.jpg',
            items: [],
            foodId: '4',
            portion: Portion.TWO,
            steps: [
                {
                    description: 'Soğan tercihe kalmış olarak rendelenir yada kabukları soyulup küçük küçük doğranır…'
                },
                {
                    description: 'Teflon bir tavada tereyağ eritilir.Eriyen yağa rende biber eklenir. ..Domatesin üstüne tuz ve karabiber eklendikten sonra tavada ki domates karıştırılır. . Tavanın kapağı yarım kapatılarak (5-6 dakika) domatesler orta ateşte pişirilir. Bu sürede biber suyunu salar çok hafiften sularını tekrar çeker ,hafiften pişer ( domatesin ilk çiğliği kalmaz)..'
                },
                {
                    description: 'Yumurtalar bir kasede çırpılır ..yumurtalar hafifçe suyunu  çekmiş,hafifçe pişmiş domateslerin üstüne  boca edilir.Ocağın altı bir tık kısılır…Tahta bir kaşıklar tavada ki domates ve yumurta 1 dakikaya yakın arada sırada karıştırılır…. Süre sonunda ocağın altında ki ateş kısılır. Tavanın üstü (çok hafif aralık kalacak şekilde) bir kapak ile kapatılır….( ben bu aşamadan sonra  tavaya bir daha kaşık sokmuyorum tavada ki malzeme pişene kadar bir daha karıştırmıyorum)'
                },
                {
                    description: 'Kısık ateşte yumurtanın beyazları pişene  kadar beklenir… Beyazlar pişerken tavada ki domates  yer yer göz göz olur pıt pıt atar :))). İşlem tamam.. taze taze çıtır ekmek ve iyi demlenmiş bir çay eşliğinde tadına doyum olmaz domatesli yumurtanızı sıcak sıcak servis edebilirsiniz… Afiyetler olsun. ..'
                }
            ]
        },
        {
            id: '5',
            name: 'Domates Yumurta  - 2 ',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
            items: [
                {
                    name: 'yumurta',
                    imagesUrl: [
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                    ],
                    quantity: 2,
                    quantityType: QuantityType.PIECE

                },
                {
                    name: 'domates',
                    imagesUrl: [
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                        'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
                    ],
                    quantity: 2,
                    quantityType: QuantityType.PIECE

                }
            ],
            foodId: '1',
            portion: Portion.TWO,
            steps: [
                {
                    description: 'Domatesler tercihe kalmış olarak rendelenir yada kabukları soyulup küçük küçük doğranır…'
                },
                {
                    description: 'Teflon bir tavada tereyağ eritilir.Eriyen yağa rende domatesler eklenir. ..Domatesin üstüne tuz ve karabiber eklendikten sonra tavada ki domates karıştırılır. . Tavanın kapağı yarım kapatılarak (5-6 dakika) domatesler orta ateşte pişirilir. Bu sürede domatesler suyunu salar çok hafiften sularını tekrar çeker ,hafiften pişer ( domatesin ilk çiğliği kalmaz)..'
                },
                {
                    description: 'Yumurtalar bir kasede çırpılır ..yumurtalar hafifçe suyunu  çekmiş,hafifçe pişmiş domateslerin üstüne  boca edilir.Ocağın altı bir tık kısılır…Tahta bir kaşıklar tavada ki domates ve yumurta 1 dakikaya yakın arada sırada karıştırılır…. Süre sonunda ocağın altında ki ateş kısılır. Tavanın üstü (çok hafif aralık kalacak şekilde) bir kapak ile kapatılır….( ben bu aşamadan sonra  tavaya bir daha kaşık sokmuyorum tavada ki malzeme pişene kadar bir daha karıştırmıyorum)'
                },
                {
                    description: 'Kısık ateşte yumurtanın beyazları pişene  kadar beklenir… Beyazlar pişerken tavada ki domates  yer yer göz göz olur pıt pıt atar :))). İşlem tamam.. taze taze çıtır ekmek ve iyi demlenmiş bir çay eşliğinde tadına doyum olmaz domatesli yumurtanızı sıcak sıcak servis edebilirsiniz… Afiyetler olsun. ..'
                }
            ]
        },
    ];

    private foods: Food[] = [
        {
            id: '1',
            name: 'Domates Yumurta ',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-0.jpg',
            recipes: this.recipes
        },
        {
            id: '2',
            name: 'Biberli Yumurta',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-4.jpg',
            recipes: this.recipes
        },
        {
            id: '3',
            name: 'Patlıcan Yumurta',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-2.jpg',
            recipes: this.recipes
        },
        {
            id: '4',
            name: 'Kabaklı Yumurta',
            imageUrl: 'https://www.meyhankoli.com/img/places/source_seo/villa-bosphorus-beylerbeyi-3.jpg',
            recipes: this.recipes
        }
    ];


    public getFoods() {
        return this.foods;
    }

    filterFoods(searchTerm: string) {
        return this.foods.filter(place => {
            return place.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

    public getFood(foodId: string) {
        console.log('foodId', foodId);
        return {
            ...this.foods.find(food => {
                return food.id = foodId;
            })
        };
    }

    public getRecipesByFoodId(foodId: string): Recipe[] {
        return this.recipes.filter(o => o.foodId === foodId);
    }

    public getRecipesById(recipiesId: string): Recipe {
        return this.recipes.find(o => o.id === recipiesId);
    }
}
