import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
        selector: 'app-invoice',
        templateUrl: './invoice.component.html',
        styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
        public orderData: any = {};
        constructor(public router: Router) { }

        ngOnInit(): void {
                this.orderData.dishDetails = JSON.parse(localStorage.getItem('dishDetails') || '{}');
                this.orderData.resId = JSON.parse(localStorage.getItem('resId') || '{}');
                this.orderData.payment = JSON.parse(localStorage.getItem('payment') || '{}');
                let self = this;

                setTimeout(function () {
                        self.router.navigate(["/summary"]);
                }, 60000)
        }

}
