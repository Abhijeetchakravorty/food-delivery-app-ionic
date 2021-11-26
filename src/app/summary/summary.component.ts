import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
        selector: 'app-summary',
        templateUrl: './summary.component.html',
        styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
        public showItem: any = {};
        constructor(public router: Router) { }

        ngOnInit(): void {
                this.showItem.qty = JSON.parse(localStorage.getItem("dishDetails") || "{}")["qty"];
        }

}
