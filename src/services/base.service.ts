import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {
  constructor(public http: HttpClient) { }

  getData(url: any): Observable<any> {
    return this.http
      .get(url)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  getDataParam(url: any, params: any): Observable<any> {
    return this.http
      .get(url, { params: params })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  createData(url: any, data: any) : Observable<any> {
    return this.http
      .post(url, data)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  createDataParam(url: any, data: any, params: any): Observable<any> {
    return this.http
      .post(url, data, { params: params })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  updateData(url: any, data: any): Observable<any> {
    return this.http
      .put(url, data)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  updateDataParam(url: any, data: any, params: any): Observable<any> {
    return this.http
      .put(url, data, { params: params })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  deleteData(url: any, data: any): Observable<any> {
    return this.http
      .delete(url + "/" + data)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }

  handleError(error: any) {
    return throwError(error.message || 'this api error')
  }

  createDataHeader(url: any, data: any, httpOptions: any): Observable<any> {
    return this.http
      .post(url, data, httpOptions)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
}
