import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';
import { ActivateAccountComponent } from '../activate-account/activate-account.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute , private _enrollService : EnrolledSportsService
    , private _router : Router ) { }

  enrolledId!: number;

  enrolledSports!: IEnrolledSports;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( p => { this.enrolledId = p.id ;});
    console.log(this.enrolledId);

    this._enrollService.enrollRequest(this.enrolledId).subscribe(
      data => {
        console.log(data);
        this.enrolledSports = data;
        console.log(this.enrolledSports);
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
      this._router.navigate(['/approvedBatches']);
  }

}
