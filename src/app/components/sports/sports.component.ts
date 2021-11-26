import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISports } from 'src/app/utility/ISports';
import { SportsService } from 'src/app/utility/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports!: ISports[];

  constructor(private _router : Router, private _sportsService  : SportsService) { }

  ngOnInit(): void {
    this._sportsService.getAllSports().subscribe(
      data =>  {
          this.sports = data;
          console.log(this.sports);
      }
    )

    console.log(this.user);
  }

  user = JSON.parse(sessionStorage['user']);
  


  indoor!: any[];

  outdoor! : any[];

  all! : any[];

  showIndoor(): void
  {
    this.indoor = this.sports.filter(sport => sport.sportsCategory === "INDOOR");
    console.log(this.indoor);
     this.sports = this.indoor;
  }

  showOutdoor():void
  {
    this.outdoor = this.sports.filter(sport => sport.sportsCategory === "OUTDOOR");
    console.log(this.outdoor);
    this.sports = this.outdoor;
  }

  showAll():void
  {
    this.all  = this.sports.filter(sports => sports.sportsCategory === "INDOOR || OUTDOOR");
    console.log(this.all);
    this.sports = this.all;
    
  }

  showBatch(id : any)
  {
    this._router.navigate(['/BatchDetails/'+id]);
  }
}
