import { Component, OnInit } from '@angular/core';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';

@Component({
  selector: 'app-rejected-batches',
  templateUrl: './rejected-batches.component.html',
  styleUrls: ['./rejected-batches.component.scss']
})
export class RejectedBatchesComponent implements OnInit {

  userId : number = 1;

  rejectedBatches!: IEnrolledSports[];

  constructor(private _enrollService : EnrolledSportsService) {

    this._enrollService.getEnrolledListByUser(this.userId).subscribe(
      data => {
        console.log(data);
        this.rejectedBatches = data;
      }
    )

   }

  ngOnInit(): void {
  }

}
