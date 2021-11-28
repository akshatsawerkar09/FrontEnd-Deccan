import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchService } from 'src/app/utility/batch.service';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IBatch } from 'src/app/utility/IBatch';
import { IMembership } from 'src/app/utility/IMembership';
import { IUser } from 'src/app/utility/IUser';
import { MembershipService } from 'src/app/utility/membership.service';
import { MembershipComponent } from '../membership/membership.component';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.scss']
})
export class BatchDetailsComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute , private _batchService : BatchService , 
    private _enrollService : EnrolledSportsService , private _router : Router , private _membershipService :  MembershipService) { }

  sportsId!: number;

  user!: IUser;

  batches !: IBatch[];

  enrolledSports !: any;

  selectedBatch!: any;

  membership!: IMembership;

  renewReminder!: string;

  remainingDays!: number;


  //user : any;

  //user = JSON.parse(sessionStorage['user']);

  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage['user']);

    this._activatedRoute.params.subscribe( p => { this.sportsId = p.id ;});

    this._batchService.getBatchesByUser(this.user.userId , this.sportsId).subscribe(
      data => {
        console.log(data);
        this.batches = data;

        

        this._membershipService.getMembership(this.user.userId).subscribe(
          data =>  {
            console.log(data);
            this.membership = data;
            console.log(this.membership.endDate);
            var end = new Date(this.membership.endDate);
            console.log(end);
            var today = new Date();
            var Time = end.getTime() - today.getTime()  ;
            var Days = Math.ceil(Time / (1000 * 3600 * 24));
            console.log(Days);
            //Math.ceil(Math.abs(end - today) / (1000 * 60 * 60 * 24)
            if(Days >=0 && Days < 4)
            {
                this.renewReminder = "showRenewReminder";
                this.remainingDays = Days;
            }
            console.log(this.membership);
          }
        )
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
   // this.enrolledSports.fees = this.selectedBatch.sportsId.membersCharge;
    this.enrolledSports.userId = this.user;
    this.enrolledSports.sportsId = this.selectedBatch.sportsId;
    this.enrolledSports.paymentStatus = 0;

    if(this.selectedBatch.offer != null)
    {
      if(this.membership.userId != null)
      {
        this.enrolledSports.fees = this.selectedBatch.sportsId.membersCharge - 
      ( this.selectedBatch.sportsId.membersCharge * this.selectedBatch.discountOffered / 100) ;
      }
      else
      {
       this.enrolledSports.fees = this.selectedBatch.sportsId.nonMembersCharge - 
      ( this.selectedBatch.sportsId.nonMembersCharge * this.selectedBatch.discountOffered / 100) ;
      }
    }
    else
    {
      if(this.membership.userId != null)
      {
        this.enrolledSports.fees = this.selectedBatch.sportsId.membersCharge ;
      }
      else
      {
       this.enrolledSports.fees = this.selectedBatch.sportsId.nonMembersCharge ;
      }
    }

    
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
      //this._router.navigate([this._router.url]);
      //this._router.navigate(['/BatchDetails/'+this.sportsId]);
  }

 // navigateToRenew()
 // {
 //   this._router.navigate(['/renewMembership']);
 // }

}
