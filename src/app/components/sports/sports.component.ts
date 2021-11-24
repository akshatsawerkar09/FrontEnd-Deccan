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
  }



  indoor!: any[];

  outdoor! : any[];

  all! : any[];

  showIndoor(): void
  {
    this.indoor = this.sports.filter(sport => sport.sportsCategory == "INDOOR");
     this.sports = this.indoor;
  }

  showOutdoor():void
  {
    this.outdoor = this.sports.filter(sport => sport.sportsCategory == "OUTDOOR");
    this.sports = this.outdoor;
  }

  showAll():void
  {
    this.all  = this.sports.filter(sports => sports.sportsCategory = "INDOOR || OUTDOOR");
    this.sports = this.all;
    
  }

  showBatch(id : any)
  {
    this._router.navigate(['/BatchDetails/'+id]);
  }
}
