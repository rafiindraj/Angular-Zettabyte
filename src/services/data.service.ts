import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { Configuration } from './config';

@Injectable({
  providedIn: 'root'
})
export class NavService extends BaseService {
  private prefixUrl = environment.domain;

  constructor(http: HttpClient) {
    super(http);
  }

  getCorrector() {
    return this.getData(this.prefixUrl + Configuration.CORRECTOR_LIST);
  }

  getSchoolCorrector(){
    return this.getData(this.prefixUrl + Configuration.SCHOOL_CORRECTOR);
  }

  getSchool(){
    return this.getData(this.prefixUrl + Configuration.SCHOOL_LIST);
  }

  getSchoolTablel(){
    return this.getData(this.prefixUrl + Configuration.SCHOOL_TABLE_LIST);
  }
  
  getStudentsTablel(){
    return this.getData(this.prefixUrl + Configuration.STUDENTS_TABLE_LIST);
  }
}
