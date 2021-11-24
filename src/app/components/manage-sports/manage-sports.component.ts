import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISports } from 'src/app/utility/ISports';
import { IUser } from 'src/app/utility/IUser';
import { SportsService } from 'src/app/utility/sports.service';

@Component({
  selector: 'app-manage-sports',
  templateUrl: './manage-sports.component.html',
  styleUrls: ['./manage-sports.component.scss']
})
export class ManageSportsComponent implements OnInit {

  constructor(private _http :  HttpClient , private _sportsService : SportsService , private _router : Router) { }

  baseUrl : string = "http://localhost:8080/manager";

  managers!: IUser[];

  sports !: ISports[];

  sportsForm : any;

  initialData : number = 0;

  ngOnInit(): void {
    this._sportsService.getIdelManagerList().subscribe(
      data => {
        console.log(data);
        this.managers = data;
        console.log(this.managers);
        if(this.managers.length !== 0)
        {
            this.initialData = this.managers[0].userId;
        }
        this.sportsForm= new FormGroup({
          sportsName : new FormControl('',[Validators.required]),
          sportsCategory : new FormControl('INDOOR',[Validators.required]),
          managerId : new FormControl(this.initialData,[Validators.required]),
          membersCharge : new FormControl('',Validators.required),
          nonMembersCharge : new FormControl('',Validators.required)
        });
      }
    )

    this._sportsService.getAllSports().subscribe(
      data => {
        console.log(data);
        this.sports = data;
        console.log(this.sports);
      }
    )


    
  }

  

  sportsObj!: ISports ;

  manager!: IUser;

  temp!: number | undefined | null;

  seletedManager!: any;
  

  addSports(sportsForm : FormGroup)
  {

      this.temp = this.sportsForm.controls['managerId'].value;

      
    console.log(this.temp);
     // console.log(this.sportsForm.controls['managerId'].value.managerId);

  

      console.log(this.managers);

      this.seletedManager =  this.managers.find(e => e.userId == this.temp);

      console.log(this.seletedManager);

      console.log(this.sportsForm);

      this.sportsObj = this.sportsForm.value;

      this.sportsObj.managerId = this.seletedManager; 

      console.log(this.sportsObj);

      this._sportsService.addSports(this.sportsObj).subscribe(
        data => {
          console.log(this.sportsObj);
          console.log("sports added");
        }
      )

      //window.location.reload();
     this.ngOnInit();
  }


  deleteSports(id : number)
  {
    this._sportsService.deleteSports(id).subscribe(
      data => {
        console.log(this.sportsObj);
        console.log("sports deleted");
      
        
      }
    )    
    window.location.reload();
   
  }

  updateSports(id : number)
  {
    this._router.navigate(['/updateSports/'+id]);
  }
  
}
