import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchService } from 'src/app/utility/batch.service';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IBatch } from 'src/app/utility/IBatch';
import { IUser } from 'src/app/utility/IUser';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.scss']
})
export class BatchDetailsComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute , private _batchService : BatchService , private _enrollService : EnrolledSportsService , private _router : Router) { }

  sportsId : number =  1;


  batches !: IBatch[];

  enrolledSports !: any;

  selectedBatch!: any;

  user : IUser ={
    userId : 1 ,
    address : "pune" ,
    email : "mark@gmail.com",
    gender : "MALE",
    loginAttempt : 0,
    password : "mark",
    phoneNumber : "123456789" ,
    userName : "mark",
    userRole : "USER",

  }

  //user : any;

  //user = JSON.parse(sessionStorage['user']);

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( p => { this.sportsId = p.id ;});

    this._batchService.getBatchesByUser(this.user.userId , this.sportsId).subscribe(
      data => {
        console.log(data);
        this.batches = data;
      }
    )
  }

  enrolledForm = new FormGroup({
    enrolledStatus : new FormControl('',[Validators.required]),
    fees : new FormControl('',[Validators.required]),
    userId : new FormControl('',[Validators.required]),
    sportsId : new FormControl('',Validators.required),
    batchId : new FormControl('',Validators.required),
    paymentStatus : new FormControl('',Validators.required)
  });

  enrollUser(batchId : number)
  { 
    this.enrolledSports = this.enrolledForm.value;
    this.selectedBatch =  this.batches.find(e => e.batchId == batchId);
    console.log(this.selectedBatch);
    console.log(this.enrolledSports);
    this.enrolledSports.batchId = this.selectedBatch;
    this.enrolledSports.enrolledStatus = 0;
    this.enrolledSports.fees = this.selectedBatch.sportsId.membersCharge;
    this.enrolledSports.userId = this.user;
    this.enrolledSports.sportsId = this.selectedBatch.sportsId;
    this.enrolledSports.paymentStatus = 0;
    console.log(this.enrolledSports);

    this._enrollService.enrollBatch(this.enrolledSports).subscribe(
      data => {
        console.log("user enrolled");
        this.ngOnInit();
      } ,
      err => {
        console.log(err);
      }
    )
      //alert("submitted your request to manager");
     
      //this._router.navigate(['/BatchDetails/'+this.sportsId]);
  }

}
