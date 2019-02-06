import { DataSource } from "@angular/cdk/collections";
import { DashboardData } from "../common/models/dashboard-data";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import 'rxjs/add/operator/map';

export class PeriodicDataSource extends DataSource<any> {
  constructor(private _data: DashboardData[], private pageIndex, private pageSize) {
        super();
    }
  
    /* Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<DashboardData[]> {
        const data = this._data;
        let selectedData=[];
        const start = this.pageSize*this.pageIndex;
        const end = this.pageSize*this.pageIndex + this.pageSize;
        for (let i= start; i < end; i++) {
            selectedData.push(data[i]);
        }
        return of(selectedData);
    }
  
    disconnect() { }
  }
  