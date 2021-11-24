import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-applied-batches',
  templateUrl: './applied-batches.component.html',
  styleUrls: ['./applied-batches.component.scss']
})
export class AppliedBatchesComponent implements OnInit {

  ngOnInit(): void {
  }

  batches : any[] = [
    {
      batchId : 1 ,
      batchType : "Morning" ,
      sports : "Chess" ,
      fees : "500"
    }
  ]

  //displayedColumns: string[] = ['position', 'name' , 'weight', 'symbol' , 'actions'];
  
  @ViewChild(MatSort) sort:MatSort | undefined;
 
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dataSource = new MatTableDataSource(this.batches);

  constructor() {


  }

  ngAfterViewInit() {
  //  this.dataSource.sort = this.sort;
  }

}

