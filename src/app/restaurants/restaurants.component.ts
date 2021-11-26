import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public restaurants: any = [];
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.restaurants = [
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
    this.restaurants.sort(function(a:any,b:any){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
    localStorage.clear();
  }

  navigateDishes(obj:any) {
    localStorage.setItem('resId', JSON.stringify(obj['id']));
    this.router.navigate(['/dishes/'+obj.id]);
  }

}
