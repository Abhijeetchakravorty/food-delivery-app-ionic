import { Component, OnInit } from '@angular/core';
import {
        Router,
        ActivatedRoute
} from '@angular/router';
@Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
        public user: any = {};
        public showLogin: boolean = true;
        constructor(public router: Router) { }

        ngOnInit(): void {
        }

        login() {
                this.router.navigate(['/restaurants'])
        }

        signup() {
                this.showLogin = !this.showLogin;
        }

        switchlogin() {
                this.showLogin = !this.showLogin;
        }

        onLogin() {

        }

        showsignup() {
                this.showLogin = false;
        }
}

