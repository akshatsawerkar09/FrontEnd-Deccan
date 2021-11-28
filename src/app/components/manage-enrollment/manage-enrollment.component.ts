import { Component, OnInit } from '@angular/core';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';
import { ISports } from 'src/app/utility/ISports';
import { IUser } from 'src/app/utility/IUser';
import { SportsService } from 'src/app/utility/sports.service';

@Component({
  selector: 'app-manage-enrollment',
  templateUrl: './manage-enrollment.component.html',
  styleUrls: ['./manage-enrollment.component.scss']
})
export class ManageEnrollmentComponent implements OnInit {

  constructor(private enrollSportsService : EnrolledSportsService , private  _sportsService : SportsService) { }

  user!: IUser;

  enrollRequests!: IEnrolledSports[];

  sports!: ISports;

  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage['user']);

    this._sportsService.getSportsByManagerId(this.user.userId).subscribe(
      data =>{
        console.log(data);
        this.sports = data;

        this.enrollSportsService.getEnrollmentRequests(this.sports.sportsId).subscribe(
          data => {
            console.log(data);
            this.enrollRequests = data;
            console.log(this.enrollRequests);
          }
        )

      }
    )
  }

  approveRequest(enrollId : number)
  {
    console.log(enrollId);
    this.enrollSportsService.approveRequest(enrollId).subscribe(
      data => {
        console.log("request approved");
      }
    )
    window.location.reload();
  }

  rejectRequest(enrollId : number)
  {
    this.enrollSportsService.rejectRequest(enrollId).subscribe(
      data => {
        console.log("request rejected");
      }
    )
    window.location.reload();
  }


}
