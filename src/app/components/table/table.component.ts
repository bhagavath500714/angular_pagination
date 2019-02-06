import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { MenuService } from 'src/app/services/menu.service';
import { Http } from '@angular/http';
import { DynaminService } from 'src/app/services/dynamin.service';
import { PeriodicDataSource } from 'src/app/datasources/dashbord-data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['albumId', 'id', 'title', 'url', 'thumbnailUrl'];
  dataSource:PeriodicDataSource;
  tableData = [];
  tableDataLength = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [10, 20, 50, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public menuService: MenuService, private http: Http, private dynaminService: DynaminService ) { 
    this.menuService.setMenuDisplay(true);
  }

  ngOnInit() {    
  
    this.dynaminService.getPosts().subscribe(data => {
      console.log(data);
      this.tableData = data;
      this.tableDataLength = data.length;
      this.dataSource = new PeriodicDataSource(data, this.pageIndex, this.pageSize);  
    });
    
  }

  public getData(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.dataSource = new PeriodicDataSource(this.tableData, this.pageIndex, this.pageSize);
  }
}


