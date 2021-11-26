import { Component, OnInit } from '@angular/core';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';

@Component({
  selector: 'app-approved-batches',
  templateUrl: './approved-batches.component.html',
  styleUrls: ['./approved-batches.component.scss']
})
export class ApprovedBatchesComponent implements OnInit {

  userId : number = 1;

  approvedBatches!: IEnrolledSports[];

  constructor(private _enrollService : EnrolledSportsService) { 

    
  }

  

  ngOnInit(): void {

    this._enrollService.getEnrolledListByUser(this.userId).subscribe(
      data => {
        console.log(data);
        this.approvedBatches = data;
      }
    )
  }

  payment(enrolledId : number)
  {
    console.log(enrolledId);
    this._enrollService.payment(enrolledId).subscribe(
      data =>  {
        console.log("payment done");
      }
    )
    window.location.reload();
  }

}
