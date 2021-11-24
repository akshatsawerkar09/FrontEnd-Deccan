import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BatchService } from 'src/app/utility/batch.service';
import { IBatch } from 'src/app/utility/IBatch';
import { ISports } from 'src/app/utility/ISports';
import { SportsService } from 'src/app/utility/sports.service';

@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.scss']
})
export class ManageBatchesComponent implements OnInit {

  constructor(private _batchService : BatchService , private _router : Router , private _sportsService : SportsService) { }

  batches : IBatch[] | undefined;

  managerId : number = 3;

  sports!: ISports;

  batchObj !: IBatch;

  sportsId : number = 1;

  ngOnInit(): void {

    this._sportsService.getSportsByManagerId(this.managerId).subscribe(
      data =>{
        console.log(data);
        this.sports = data;
      }
    )

      this._batchService.getAllBatches(this.sportsId).subscribe(
        data => {
          console.log(data);
          this.batches = data;
        }
      )
  }

  batchForm= new FormGroup({
    batchName:new FormControl('MORNING',[Validators.required]),
    coachName:new FormControl('',[Validators.required]),
    startTime:new FormControl('',[Validators.required ]),
    endTime:new FormControl('', [Validators.required, Validators.max(3)]),
    batchStrength: new FormControl('' , [Validators.required]),
    offer : new FormControl(''),
    discountOffered : new FormControl('')


  });


  addBatch(batchForm : FormGroup)
  {
      console.log(batchForm.value);

      this.batchObj = batchForm.value;
      this.batchObj.sportsId = this.sports;

      console.log(this.batchObj);

      this._batchService.addBatch(this.batchObj).subscribe(
        data =>{
          console.log("batch added");
        }
      )

      window.location.reload();
  }

  updateBatch(batchId : number)
  {
    this._router.navigate(['/updateBatch/'+batchId]);
  }

  deleteBatch(batchId : number)
  {
    this._batchService.deleteBatch(batchId).subscribe(
      data =>  {
        console.log("batch deleted");
      }
    )

    window.location.reload();
  }
}
