import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMembership } from 'src/app/utility/IMembership';
import { IUser } from 'src/app/utility/IUser';
import { MembershipService } from 'src/app/utility/membership.service';

@Component({
  selector: 'app-renew-membership',
  templateUrl: './renew-membership.component.html',
  styleUrls: ['./renew-membership.component.scss']
})
export class RenewMembershipComponent implements OnInit {

  user!: IUser;

  membership!: IMembership;

  constructor(private _membershipService  : MembershipService , private _router : Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage['user']);
  }

  membershipForm = new FormGroup({
    membershipType : new FormControl('',[Validators.required]),
    regDate : new FormControl('',[Validators.required]),
    endDate : new FormControl('',[Validators.required]),
    costPaid : new FormControl('',[Validators.required]),
    userId : new FormControl('',[Validators.required])
  });

  Monthly(cost : number)
  {
    this.membership = this.membershipForm.value;
    this.membership.membershipType = "MONTHLY";
    this.membership.userId = this.user;
    this._membershipService.renewMembership(this.membership).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/sports']);
      }
    )
  }

  Quaterly(cost : number)
  {
    this.membership = this.membershipForm.value;
    this.membership.membershipType = "QUATERLY";
    this.membership.userId = this.user;
    console.log(this.membership);
    this._membershipService.renewMembership(this.membership).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/sports']);
      }
    )
  }

  Yearly(cost : number)
  {
    this.membership = this.membershipForm.value;
    this.membership.membershipType = "YEARLY";
    this.membership.userId = this.user;
    this._membershipService.renewMembership(this.membership).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/sports']);
      }
    )
  }

}
