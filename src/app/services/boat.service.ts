import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boat } from '../model/boat.model'
import { AuthService } from './auth.service';


const httpOptions = { 
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  apiURL : string = 'http://localhost:8080/boatapp/api';

  boat! : Boat;
  boats? : Boat[];


  constructor(private http : HttpClient, private authService : AuthService) {}

  listerBateaux(): Observable<Boat[]> {
    return this.http.get<Boat[]>(this.apiURL);
    //let jwt = this.authService.getToken();
    //jwt = "Bearer "+jwt;
    //let httpHeaders = new HttpHeaders({"Authorization":jwt})
    //return this.http.get<Boat[]>(this.apiURL+"/all",{headers:httpHeaders});
  }

   ajouterBateau(boat: Boat): Observable<Boat>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post<Boat>(this.apiURL, boat, {headers:httpHeaders});
    //return this.http.post<Boat>(this.apiURL, boat, httpOptions);
  }

  supprimerBateau(id: number){

    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.delete(url,  {headers:httpHeaders});
    //const url = `${this.apiURL}/${id}`;
    //return this.http.delete(url, httpOptions);
  }

  consulterBateau(id: number): Observable<Boat>{

    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Boat>(url,{headers:httpHeaders});
    
    //const url = `${this.apiURL}/${id}`;
    //return this.http.get<Boat>(url);
  }

  mettreAJourBateau(boat: Boat) : Observable<Boat>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<Boat>(this.apiURL, boat, {headers:httpHeaders});
    //return this.http.put<Boat>(this.apiURL, boat, httpOptions);
  }

  rechercherBateauxParNom(nom: string): Observable<Boat[]> {
    const url = `${this.apiURL}/boatsByName/${nom}`;
    return this.http.get<Boat[]>(url);
  }


}
