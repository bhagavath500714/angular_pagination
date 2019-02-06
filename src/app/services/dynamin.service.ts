import { Injectable } from '@angular/core';
import * as Constants from '../common/constant';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DynaminService {

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(Constants.DYNAMIC_URL).map(res=>res.json());
  }
}
