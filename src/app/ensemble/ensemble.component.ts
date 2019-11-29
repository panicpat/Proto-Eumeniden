import { Component, OnInit } from '@angular/core';

import { PerformanceService } from "../performance.service";

@Component({
  selector: 'app-ensemble',
  templateUrl: './ensemble.component.html',
  styleUrls: ['./ensemble.component.css']
})
export class EnsembleComponent implements OnInit {

  items;

  constructor(
        private performanceService: PerformanceService
  ) { 

    this.items = performanceService.getPerformancesChildren();
  }

  ngOnInit() {
  }

}