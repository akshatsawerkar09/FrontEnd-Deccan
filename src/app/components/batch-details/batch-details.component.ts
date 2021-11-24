import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BatchService } from 'src/app/utility/batch.service';
import { IBatch } from 'src/app/utility/IBatch';
import { IUser } from 'src/app/utility/IUser';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.scss']
})
export class BatchDetailsComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute , private _batchService : BatchService) { }

  sportsId : number =  1;

  batches!: IBatch[];

  //user : any;

  //user = JSON.parse(sessionStorage['user']);

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( p => { this.sportsId = p.id ;});

    this._batchService.getAllBatches(this.sportsId).subscribe(
      data => {
        console.log(data);
        this.batches = data;
      }
    )
    
  }

  enrollUser(batchId : number)
  {

  }

}
