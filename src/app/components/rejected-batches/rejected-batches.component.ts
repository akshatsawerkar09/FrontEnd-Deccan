import { Component, OnInit } from '@angular/core';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';
import { IUser } from 'src/app/utility/IUser';

@Component({
  selector: 'app-rejected-batches',
  templateUrl: './rejected-batches.component.html',
  styleUrls: ['./rejected-batches.component.scss']
})
export class RejectedBatchesComponent implements OnInit {

  user!: IUser;

  rejectedBatches!: IEnrolledSports[];

  constructor(private _enrollService : EnrolledSportsService) {

   }

  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage['user']);

    this._enrollService.getEnrolledListByUser(this.user.userId).subscribe(
      data => {
        console.log(data);
        this.rejectedBatches = data;
      }
    )
  }

}
