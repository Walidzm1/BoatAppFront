import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoatsComponent } from './boats/boats.component';
import { AddBoatComponent } from './add-boat/add-boat.component';
import { UpdateBoatComponent } from './update-boat/update-boat.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

const routes: Routes = [
  {path: "login", component : LoginComponent},
  {path: "boats", component : BoatsComponent},
  {path: "add-boat", component : AddBoatComponent},
  {path: "update-boat/:id", component : UpdateBoatComponent},
  {path: "search-by-name", component : SearchByNameComponent},
  {path: "", redirectTo: "boats", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
