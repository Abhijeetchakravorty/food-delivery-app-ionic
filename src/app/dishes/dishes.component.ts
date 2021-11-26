import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  public dishes: any = [];
  public dish: any = {};
  public updatedDishes: any = [];
  public selectedValue:any = 1;
  constructor(public router: Router, public activeRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.dishes = [
      {
        "id":1,
        "name": "The Indian Dhaba",
        "items": [
          {
            "id": 1,
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "id": 2,
            "name": "Dosa",
            "price": 50
          },
          {
            "id":3,
            "name": "Chicken",
            "price": 50
          },
          {
            "id": 4,
            "name": "Mutton",
            "price": 50
          },
          {
            "id":5,
            "name": "Burger",
            "price": 50
          },
          {
            "id":6,
            "name": "Mutton Burger",
            "price": 50
          }
        ]
      },
      {
        "id":2,
        "name": "The Indian Restaurant",
        "items": [
          {
            "id": 1,
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "id": 2,
            "name": "Dosa",
            "price": 50
          },
          {
            "id":3,
            "name": "Chicken",
            "price": 50
          },
          {
            "id": 4,
            "name": "Mutton",
            "price": 50
          },
          {
            "id":5,
            "name": "Burger",
            "price": 50
          },
          {
            "id":6,
            "name": "Mutton Burger",
            "price": 50
          }
        ]
      },
      {
        "id":3,
        "name": "The Dhaba",
        "items": [
          {
            "id": 1,
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "id": 2,
            "name": "Dosa",
            "price": 50
          },
          {
            "id":3,
            "name": "Chicken",
            "price": 50
          },
          {
            "id": 4,
            "name": "Mutton",
            "price": 50
          },
          {
            "id":5,
            "name": "Burger",
            "price": 50
          },
          {
            "id":6,
            "name": "Mutton Burger",
            "price": 50
          }
        ]
      },
      {
        "id":4,
        "name": "Yellow Chilli",
        "items": [
          {
            "id": 1,
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "id": 2,
            "name": "Dosa",
            "price": 50
          },
          {
            "id":3,
            "name": "Chicken",
            "price": 50
          },
          {
            "id": 4,
            "name": "Mutton",
            "price": 50
          },
          {
            "id":5,
            "name": "Burger",
            "price": 50
          },
          {
            "id":6,
            "name": "Mutton Burger",
            "price": 50
          }
        ]
      },
      {
        "id":5,
        "name": "Red Chilli",
        "items": [
          {
            "id": 1,
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "id": 2,
            "name": "Dosa",
            "price": 50
          },
          {
            "id":3,
            "name": "Chicken",
            "price": 50
          },
          {
            "id": 4,
            "name": "Mutton",
            "price": 50
          },
          {
            "id":5,
            "name": "Burger",
            "price": 50
          },
          {
            "id":6,
            "name": "Mutton Burger",
            "price": 50
          }
        ]
      },
      {
        "id":6,
        "name": "Desi Tadka",
        "items": [
          {
            "id": 1,
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "id": 2,
            "name": "Dosa",
            "price": 50
          },
          {
            "id":3,
            "name": "Chicken",
            "price": 50
          },
          {
            "id": 4,
            "name": "Mutton",
            "price": 50
          },
          {
            "id":5,
            "name": "Burger",
            "price": 50
          },
          {
            "id":6,
            "name": "Mutton Burger",
            "price": 50
          }
        ]
      },
      {
        "id":7,
        "name": "Hotel Sangheeta Maane",
        "items": [
          {
            "id": 1,
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "id": 2,
            "name": "Dosa",
            "price": 50
          },
          {
            "id":3,
            "name": "Chicken",
            "price": 50
          },
          {
            "id": 4,
            "name": "Mutton",
            "price": 50
          },
          {
            "id":5,
            "name": "Burger",
            "price": 50
          },
          {
            "id":6,
            "name": "Mutton Burger",
            "price": 50
          }
        ]
      }
    ];
    this.dishes.sort(function(a:any,b:any){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
    this.loadDishes();
  }

  loadDishes() {
    let resId = JSON.parse(localStorage.getItem('resId') || '{}');
    for(let k=0;k<this.dishes.length;k++) {
      if (resId == this.dishes[k]["id"]) {
        this.updatedDishes = this.dishes[k]["items"];
        this.updatedDishes.sort(function(a:any,b:any){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
      }
    }
  }

  orderNow(dish: any) {
    dish.qty = this.dish.qty;
    localStorage.setItem('dishDetails', JSON.stringify(dish));
    this.router.navigate(["/payment"]);
  }
}
