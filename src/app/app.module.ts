import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
        HttpClientModule
} from '@angular/common/http';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { DishesComponent } from './dishes/dishes.component';
import {MatSelectModule} from '@angular/material/select';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';
import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatExpansionModule
} from '@angular/material/expansion';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  MatCheckboxModule
} from '@angular/material/checkbox';
import {
  MatAutocompleteModule
} from '@angular/material/autocomplete';
import {
  MatChipsModule
} from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    RestaurantsComponent,
    DishesComponent,
    OrderComponent,
    PaymentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
                HttpClientModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MatFormFieldModule,
                FlexLayoutModule,
                ReactiveFormsModule,
                FormsModule,
                MatSnackBarModule,
                MatButtonModule,
                MatInputModule,
                MatSidenavModule,
                MatIconModule,
                MatMenuModule,
                MatToolbarModule,
                MatExpansionModule,
                MatListModule,
                MatCardModule,
                MatTableModule,
                MatPaginatorModule,
                MatSelectModule,
                MatCheckboxModule,
                MatAutocompleteModule,
                MatChipsModule,
                MatDialogModule,
    MatProgressSpinnerModule,
                MatNativeDateModule,
                MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
