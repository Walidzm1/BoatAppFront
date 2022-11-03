import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoatsComponent } from './boats/boats.component';
import { AddBoatComponent } from './add-boat/add-boat.component';
import { UpdateBoatComponent } from './update-boat/update-boat.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    BoatsComponent,
    AddBoatComponent,
    UpdateBoatComponent,
    SearchByNameComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
