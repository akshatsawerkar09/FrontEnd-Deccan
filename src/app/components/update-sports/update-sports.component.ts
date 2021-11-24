import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISports } from 'src/app/utility/ISports';
import { IUser } from 'src/app/utility/IUser';
import { SportsService } from 'src/app/utility/sports.service';

@Component({
  selector: 'app-update-sports',
  templateUrl: './update-sports.component.html',
  styleUrls: ['./update-sports.component.scss']
})
export class UpdateSportsComponent implements OnInit {

  sportsForm : any;

  constructor(private _activatedRoute : ActivatedRoute , private _sportsService : SportsService , private _router : Router) { 

    this.ngOnInit();

   

  }

  sportsId!: number;

  existingSport!: ISports;

  managers!: IUser[];


  ngOnInit(): void {
    this._activatedRoute.params.subscribe( p => { this.sportsId = p.id ;})

    this._sportsService.getSportsById(this.sportsId).subscribe(
      data => {
        this.existingSport = data;
        this._sportsService.getIdelManagerList().subscribe(
          data => {
            this.managers = data;
            console.log(this.managers);
            
            this.managers.push(this.existingSport.managerId);
            console.log(this.managers);
          }
        );

       
        this.sportsForm= new FormGroup({
          sportsName : new FormControl(this.existingSport.sportsName,[Validators.required]),
          sportsCategory : new FormControl(this.existingSport.sportsCategory,[Validators.required]),
          managerId : new FormControl(this.existingSport.managerId.userId,[Validators.required]),
          membersCharge : new FormControl(this.existingSport.membersCharge,[Validators.required]),
          nonMembersCharge : new FormControl(this.existingSport.nonMembersCharge,[Validators.required])
        });
        console.log(this.existingSport);
        console.log(this.existingSport.managerId);
        //this.managers.push(this.existingSport.managerId);

      }
    );

   

    
    }
    

  ngAfterViewInit() : void{

  }

  temp!: number | undefined | null;

  seletedManager!: any;

  sportsObj!: ISports ;

  updateSports(sportsForm : FormGroup)
  {
    this.temp = this.sportsForm.controls['managerId'].value;

      
    console.log(this.temp);

    this.seletedManager =  this.managers.find(e => e.userId == this.temp);

    this.sportsObj = this.sportsForm.value;

      this.sportsObj.managerId = this.seletedManager; 

      this.sportsObj.sportsId = this.sportsId;

      console.log(this.sportsObj);

      this._sportsService.updateSports(this.sportsObj).subscribe(
        data => {
          console.log(this.sportsObj);
          console.log("sports updated");
        }
      )

      this._router.navigate(['/manageSports']);
  }

 
}
