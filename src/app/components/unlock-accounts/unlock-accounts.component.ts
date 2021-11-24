import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/utility/IUser';
import { UserService } from 'src/app/utility/user.service';

@Component({
  selector: 'app-unlock-accounts',
  templateUrl: './unlock-accounts.component.html',
  styleUrls: ['./unlock-accounts.component.scss']
})
export class UnlockAccountsComponent implements OnInit {

  constructor(private  _userService : UserService) { }

  lockedAccounts!: IUser[];


  ngOnInit(): void {

    this._userService.getLockedAccounts().subscribe(
      data => {
        console.log(data);
        this.lockedAccounts = data;
        console.log(this.lockedAccounts);
      }
    )
  }

  unlockAccount(userId : number)
  {
    console.log(userId);
    this._userService.unlockAccount(userId).subscribe(
      data => {
        console.log(data);
      }
    )
    
    window.location.reload();
  }


}
