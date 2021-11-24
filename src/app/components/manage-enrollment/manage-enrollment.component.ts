import { Component, OnInit } from '@angular/core';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';

@Component({
  selector: 'app-manage-enrollment',
  templateUrl: './manage-enrollment.component.html',
  styleUrls: ['./manage-enrollment.component.scss']
})
export class ManageEnrollmentComponent implements OnInit {

  constructor(private enrollSportsService : EnrolledSportsService) { }

  sportsId : number = 1;

  ngOnInit(): void {
    this.enrollSportsService.getEnrollmentRequests(this.sportsId).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
