import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, image: './img/mais.jpg',name: 'Maisie Williams',age:23 },
      { id: 1,image: './img/kit.jpg', name: 'Kit Harington',age:34 },
      { id: 2, image: './img/emilia.jpg',name: 'Emilia Clarke',age:26 },
      { id: 3, image: './img/aidan.jpg',name: 'Aidan Gillen',age:46},
      { id: 4, image: './img/niko.jpg',name: 'Nikolaj Coster-Waldau',age:41 },
      { id: 5, image: './img/lin.jpg',name: 'Lena Headey',age:34 },
      { id: 6, image: './img/lain.jpg',name: 'Iain Glen',age:45 },
      { id: 7, image: './img/liam.jpg',name: 'Liam Cunningham',age:53 },
      { id: 8, image: './img/rich.jpg',name: 'Richard Madden',age:39 },
      { id: 9, image: './img/img1.jpg',name: 'Michelle Fairley',age:37 },
      { id: 10, image: './img/aidan.jpg', name: 'Aidan Gillen' ,age:51}
    ];
    return {heroes};
  }
}
