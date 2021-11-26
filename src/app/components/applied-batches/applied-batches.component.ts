import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EnrolledSportsService } from 'src/app/utility/enrolled-sports.service';
import { IEnrolledSports } from 'src/app/utility/IEnrolledSports';


@Component({
  selector: 'app-applied-batches',
  templateUrl: './applied-batches.component.html',
  styleUrls: ['./applied-batches.component.scss']
})
export class AppliedBatchesComponent implements OnInit {

  userId : number = 1;

  appliedBatches!: IEnrolledSports[];

  constructor(private _enrollService : EnrolledSportsService)
  {
      this._enrollService.getEnrolledListByUser(this.userId).subscribe(
        data => {
          console.log(data);
          this.appliedBatches = data;
        }
      )
  }

  ngOnInit(): void {

  }

  

  

}

