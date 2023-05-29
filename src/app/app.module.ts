import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { AccountService } from './_services/account.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateInputComponent } from './_forms/date-input/date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    TextInputComponent,
    DateInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [BsDatepickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
