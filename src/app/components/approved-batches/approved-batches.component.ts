import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';
import { IUser } from 'src/app/utility/IUser';

@Component({
  selector: 'app-approved-batches',
  templateUrl: './approved-batches.component.html',
  styleUrls: ['./approved-batches.component.scss']
})
export class ApprovedBatchesComponent implements OnInit {

  user!: IUser;

  approvedBatches!: IEnrolledSports[];

  constructor(private _enrollService : EnrolledSportsService , private _router : Router) { 

    
  }

  

  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage['user']);

    this._enrollService.getEnrolledListByUser(this.user.userId).subscribe(
      data => {
        console.log(data);
        this.approvedBatches = data;
      }
    )
  }

/*  payment(enrolledId : number)
  {
    console.log(enrolledId);
    this._enrollService.payment(enrolledId).subscribe(
      data =>  {
        console.log("payment done");
      }
    )
   // window.location.reload();
   this.ngOnInit();
  }
*/
  payment(enrolledId : any)
  {
    this._router.navigate(['/payment/'+enrolledId]);
  }
}
