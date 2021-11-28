import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISports } from 'src/app/utility/ISports';
import { IUser } from 'src/app/utility/IUser';
import { SportsService } from 'src/app/utility/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  allSports!: ISports[];

  sports!: ISports[];

  user!: IUser;

  constructor(private _router : Router, private _sportsService  : SportsService) { }

  ngOnInit(): void {
    this._sportsService.getAllSports().subscribe(
      data =>  {
          this.allSports = data;
          console.log(this.allSports);
          this.sports = this.allSports;
          console.log(this.sports);
      }
    )

     this.user = JSON.parse(sessionStorage['user']);

   // console.log(this.user);
    
  }

 
  


  indoor!: any[];

  outdoor! : any[];


  showIndoor(): void
  {

    this.sports = this.allSports;
    this.indoor = this.sports.filter(sport => sport.sportsCategory === "INDOOR");
    console.log(this.indoor);
     this.sports = this.indoor;
  }

  showOutdoor():void
  {
    this.sports = this.allSports;
    this.outdoor = this.sports.filter(sport => sport.sportsCategory === "OUTDOOR");
    console.log(this.outdoor);
    this.sports = this.outdoor;
  }

  showAll():void
  {
    this.sports = this.allSports;
  }

  showBatch(id : any)
  {
    this._router.navigate(['/BatchDetails/'+id]);
  }
}
