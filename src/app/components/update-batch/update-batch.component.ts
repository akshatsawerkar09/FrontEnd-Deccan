import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchService } from 'src/app/utility/batch.service';
import { IBatch } from 'src/app/utility/IBatch';
import { ISports } from 'src/app/utility/ISports';
import { SportsService } from 'src/app/utility/sports.service';

@Component({
  selector: 'app-update-batch',
  templateUrl: './update-batch.component.html',
  styleUrls: ['./update-batch.component.scss']
})
export class UpdateBatchComponent implements OnInit {

  constructor( private _sportsService : SportsService , private _activatedRoute : ActivatedRoute , private _router : Router , private _batchService : BatchService) { }

  batchId!: number;

  existingBatch!: IBatch;

  batchForm : any;

  managerId : number = 3;

  sports!: ISports;

  ngOnInit(): void {


    this._sportsService.getSportsByManagerId(this.managerId).subscribe(
      data =>{
        console.log(data);
        this.sports = data;
      }
    )

    this._activatedRoute.params.subscribe( p => { this.batchId = p.id ;})

    this._batchService.getBatchById(this.batchId).subscribe(
      data => {
        this.existingBatch = data;
        console.log(this.existingBatch);
        this.batchForm= new FormGroup({
          batchName:new FormControl(this.existingBatch.batchName,[Validators.required]),
          coachName:new FormControl(this.existingBatch.coachName,[Validators.required]),
          startTime:new FormControl(this.existingBatch.startTime,[Validators.required]),
          endTime:new FormControl(this.existingBatch.endTime, [Validators.required]),
          batchStrength: new FormControl(this.existingBatch.batchStrength , [Validators.required]),
          offers : new FormControl(this.existingBatch.offer),
          discountOffered : new FormControl(this.existingBatch.discountOffered)
        });
      }
    )

    

  }

  updateBatch(batchForm : FormGroup)
  {
      this.existingBatch = batchForm.value;
      this.existingBatch.sportsId = this.sports;
      this.existingBatch.batchId = this.batchId;
      console.log(this.existingBatch);
      this._batchService.updateBatch(this.existingBatch).subscribe(
        data => {
          console.log(this.existingBatch);
          console.log("batch updated");
        }
      )
      this._router.navigate(['/manageBatches']);
  }

}
