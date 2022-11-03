import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Boat } from '../model/boat.model'
import { BoatService } from '../services/boat.service'
import { BoatsComponent } from '../boats/boats.component'
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {

  boats? : Boat[];
  nameBoat! : string;
  boatComp! : BoatsComponent; 

  searchTerm! : string ;
  allBoats! : Boat[];

  constructor(private activatedroute : ActivatedRoute,
    private router : Router,
    private boatService : BoatService,
    public authService : AuthService) { 
      this.boatComp = new BoatsComponent(activatedroute, router, boatService, authService);
    }

  ngOnInit(): void {
    this.boatService.listerBateaux().subscribe(boats => {
      this.allBoats = boats;
      this.boats = boats;
    })
  }

  searchBoats(){
    this.boatService.rechercherBateauxParNom(this.nameBoat).subscribe(boats => {
      this.boats = boats;
    })
  }

  deleteBoat(boat : Boat){
    this.boatComp.deleteBoat(boat);
  }

  onKeyUp(filterText : string){
    this.boats = this.allBoats.filter(item =>
    item.nameBoat.toLowerCase().includes(filterText.toLowerCase()));
  }
  
}
