import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {
        NavigationComponent
} from './navigation/navigation.component';
import {
        LoginComponent
} from './login/login.component';
import {
        RegistrationComponent
} from './registration/registration.component'
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DishesComponent } from './dishes/dishes.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
        {       
                path: '', 
                redirectTo: 'login', 
                pathMatch: 'full' 
        },
        {
                path: '',
                component: AppComponent,
                children: [
                        {
                                path: "login",
                                component: LoginComponent
                        },
                        {
                                path: 'registration',
                                component: RegistrationComponent
                        },
                        {
                                path: '',
                                component: NavigationComponent,
                                children: [
                                        
                                        {
                                                path: 'restaurants',
                                                component: RestaurantsComponent
                                        },
                                        {
                                                path: 'dishes/:id',
                                                component: DishesComponent
                                        },
                                        {
                                                path: 'payment',
                                                component: PaymentComponent
                                        },
                                        {
                                                path: 'order',
                                                component: OrderComponent
                                        }
                                ]
                        }
                ]
        },
        {
                path: '**',
                component: NotFoundComponent 
        }

];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }