import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Boat } from '../model/boat.model'
import { BoatService } from '../services/boat.service'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  boats? : Boat[];
  //private boatService = new BoatService ();

  constructor(private activatedroute : ActivatedRoute,
    private router : Router,
    private boatService : BoatService,
    public authService : AuthService) {
  }

  ngOnInit(): void {
    this.chargeBoats();
  }

  chargeBoats() {
    this.boatService.listerBateaux().subscribe(boats => {
      //console.log(boats);
      this.boats = boats;
    })

  }

  deleteBoat(boat : Boat){
    let conf = confirm("Êtes vous sûr de vouloir supprimer ce bateau ?")
    if (conf){
      this.boatService.supprimerBateau(boat.idBoat).subscribe(boats => {
        //console.log("Bateau supprimé");
        this.chargeBoats();
        this.router.navigate(["/search-by-name"]);
      })
    }
  }

}
