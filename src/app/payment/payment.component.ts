import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
        selector: 'app-payment',
        templateUrl: './payment.component.html',
        styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
        public payment: any = {};
        public showPhoneError: boolean = false;
        public errorText: String = '';
        constructor(public router: Router) { }

        ngOnInit(): void {
                this.payment.amount = JSON.parse(localStorage.getItem("dishDetails") || '{}')["price"] * JSON.parse(localStorage.getItem("dishDetails") || '{}')["qty"];
                this.payment.totalAmount = (this.payment.amount * 0.10) + this.payment.amount;
        }

        payNow() {
                if (/^[6-9]\d{9}$/.test(this.payment.phone) && this.payment.address.length !== 0 && this.payment.card !== undefined) {
                        this.showPhoneError = false;
                        
                        
                        localStorage.setItem('payment', JSON.stringify(this.payment));
                        this.router.navigate(['/invoice']);
                } else {
                        this.showPhoneError = true;
                        this.errorText = "Please provide all details correctly"
                };
        }
}
