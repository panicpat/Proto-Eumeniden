import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PerformanceService {

  constructor(
    private http: HttpClient
  ) {}

  getPerformancesChildren() {
    return this.http.get('/assets/test.json');
  }

}