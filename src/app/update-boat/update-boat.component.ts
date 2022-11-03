import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BoatService } from '../services/boat.service';
import { Boat } from '../model/boat.model';


@Component({
  selector: 'app-update-boat',
  templateUrl: './update-boat.component.html',
  styleUrls: ['./update-boat.component.css']
})
export class UpdateBoatComponent implements OnInit {


  currentBoat = new Boat();

  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private boatService : BoatService) {

  }

  ngOnInit() : void {
    this.boatService.consulterBateau(this.activatedRoute.snapshot.params['id']).subscribe(boat => {
      this.currentBoat = boat;
    })
  }

  updateBoat (){
    this.boatService.mettreAJourBateau(this.currentBoat).subscribe(boat => {
      this.router.navigate(["/search-by-name"]);
    });
  }

}
