import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  public dishes: any = [];
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
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "name": "Dosa",
            "price": 50
          },
          {
            "name": "Chickem",
            "price": 50
          },
          {
            "name": "Mutton",
            "price": 50
          },
          {
            "name": "Burger",
            "price": 50
          },
          {
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
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "name": "Dosa",
            "price": 50
          },
          {
            "name": "Chickem",
            "price": 50
          },
          {
            "name": "Mutton",
            "price": 50
          },
          {
            "name": "Burger",
            "price": 50
          },
          {
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
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "name": "Dosa",
            "price": 50
          },
          {
            "name": "Chickem",
            "price": 50
          },
          {
            "name": "Mutton",
            "price": 50
          },
          {
            "name": "Burger",
            "price": 50
          },
          {
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
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "name": "Dosa",
            "price": 50
          },
          {
            "name": "Chickem",
            "price": 50
          },
          {
            "name": "Mutton",
            "price": 50
          },
          {
            "name": "Burger",
            "price": 50
          },
          {
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
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "name": "Dosa",
            "price": 50
          },
          {
            "name": "Chickem",
            "price": 50
          },
          {
            "name": "Mutton",
            "price": 50
          },
          {
            "name": "Burger",
            "price": 50
          },
          {
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
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "name": "Dosa",
            "price": 50
          },
          {
            "name": "Chickem",
            "price": 50
          },
          {
            "name": "Mutton",
            "price": 50
          },
          {
            "name": "Burger",
            "price": 50
          },
          {
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
            "name": "Dal Makhani",
            "price": 50
          },
          {
            "name": "Dosa",
            "price": 50
          },
          {
            "name": "Chickem",
            "price": 50
          },
          {
            "name": "Mutton",
            "price": 50
          },
          {
            "name": "Burger",
            "price": 50
          },
          {
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
      }
    }
  }
}
