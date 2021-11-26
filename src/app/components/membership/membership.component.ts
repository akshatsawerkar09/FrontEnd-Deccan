import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userId : number = 1;
  membershipType!: string;

  Monthly(cost : number)
  {
    this.membershipType = "MONTHLY";
    
  }

  Quaterly(cost : number)
  {
    this.membershipType = "QUATERLY";
  }

  Yearly(cost :number)
  {
    this.membershipType = "YEARLY";
  }

}
