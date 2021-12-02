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
 membership:any[]=[{name:"MONTHLY",description:"Access to any 1 sport",price:"300$"},{name:"QUARTERLY",description:"Access to any 3 sports",price:"1500$"},{name:"YEARLY",description:"Acess to any 6 sports",price:"2500$"}]
}
