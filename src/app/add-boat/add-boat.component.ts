import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Boat } from '../model/boat.model'
import { BoatService } from '../services/boat.service'

@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css']
})
export class AddBoatComponent implements OnInit {

  newBoat = new Boat();
  message? : string ;

  constructor(private activatedroute : ActivatedRoute,
    private router : Router,
    private boatService : BoatService) {

  }

  ngOnInit(): void {
  }

  addBoat (){
    this.boatService.ajouterBateau(this.newBoat).subscribe(boat => {
      //console.log (boat);
      this.router.navigate(["boats"]);
    });
  }

}
