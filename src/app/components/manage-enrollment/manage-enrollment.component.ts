import { Component, OnInit } from '@angular/core';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';

@Component({
  selector: 'app-manage-enrollment',
  templateUrl: './manage-enrollment.component.html',
  styleUrls: ['./manage-enrollment.component.scss']
})
export class ManageEnrollmentComponent implements OnInit {

  constructor(private enrollSportsService : EnrolledSportsService) { }

  sportsId : number = 1;

  enrollRequests!: IEnrolledSports[];

  ngOnInit(): void {
    this.enrollSportsService.getEnrollmentRequests(this.sportsId).subscribe(
      data => {
        console.log(data);
        this.enrollRequests = data;
        console.log(this.enrollRequests);
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
