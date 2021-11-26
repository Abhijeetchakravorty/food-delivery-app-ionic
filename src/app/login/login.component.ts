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
        public showError: boolean = false;
        public showLock: boolean = true;
        public inputType: string = 'password';
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
                // Minimum eight characters, 
                // at least one uppercase letter, one lowercase letter, 
                // one number and one special character:
                console.log('I am here');
                console.log(this.user);
                let validate = (this.validateEmail(this.user.email) && this.validatePassword(this.user.password));
                console.log(validate);
                if (validate) {
                        this.showError = false;
                        this.router.navigate(['/restaurants']);
                } else {
                        this.showError = true;
                        this.showError = true;
                }
        }

        showsignup() {
                this.showLogin = false;
        }

        validateEmail(email:any){
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                };
                return false
        };

        validatePassword(pass: any) {
                if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(pass)) {
                        return true;
                };
                return false;
        }

        togglePassword(num: number) {
                if (this.inputType == 'text') {
                        this.showLock = true;
                        this.inputType = 'password';
                } else {
                        this.showLock = false;
                        this.inputType = 'text';
                }
        }
}

