import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare const AmCharts: any;
declare var $: any;

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/usaLow.js';

import '../../../../assets/charts/float/jquery.flot.js';
import '../../../../assets/charts/float/jquery.flot.categories.js';
import '../../../../assets/charts/float/curvedLines.js';
import '../../../../assets/charts/float/jquery.flot.tooltip.min.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent implements OnInit {
  public chartOption: any = {
    legend: {
      show: false
    },
    series: {
      label: '',
      curvedLines: {
        active: true,
        nrSplinePoints: 20
      },
    },
    tooltip: {
      show: true,
      content: 'x : %x | y : %y'
    },
    grid: {
      hoverable: true,
      borderWidth: 0,
      labelMargin: 0,
      axisMargin: 0,
      minBorderMargin: 0,
    },
    yaxis: {
      min: 0,
      max: 30,
      color: 'transparent',
      font: {
        size: 0,
      }
    },
    xaxis: {
      color: 'transparent',
      font: {
        size: 0,
      }
    }
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {

      $.plot($('#amount-processed'), [{
        data: [
          [0, 2],
          [1, 10],
          [2, 20],
          [3, 10],
          [4, 27],
          [5, 15],
          [6, 20],
          [7, 24],
          [8, 20],
          [9, 16],
          [10, 18],
          [11, 10],
          [12, 20],
          [13, 27],
          [14, 15],
          [15, 20],
          [16, 24],
          [17, 20],
          [18, 16],
          [19, 18],
          [20, 10],
          [21, 20],
          [22, 10],
          [23, 5],
        ],
        color: '#448aff',
        lines: {
          show: true,
          fill: true,
          lineWidth: 3
        },
        points: {
          show: true,
          radius: 3,
          fill: true,
        },
        curvedLines: {
          apply: false,
        }
      }], this.chartOption);

      $.plot($('#amount-spent'), [{
        data: [
          [0, 2],
          [1, 10],
          [2, 20],
          [3, 10],
          [4, 27],
          [5, 15],
          [6, 20],
          [7, 24],
          [8, 20],
          [9, 16],
          [10, 18],
          [11, 10],
          [12, 20],
          [13, 27],
          [14, 15],
          [15, 20],
          [16, 24],
          [17, 20],
          [18, 16],
          [19, 18],
          [20, 10],
          [21, 20],
          [22, 10],
          [23, 5],
        ],
        color: '#9ccc65',
        bars: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: {
            colors: [{
              opacity: 0.7
            }, {
              opacity: 0.7
            }]
          },
          barWidth: 0.5,
          align: 'center',
          horizontal: false
        },
        points: {
          show: false
        },
      }], this.chartOption);

      $.plot($('#profit-processed'), [{
        data: [
          [0, 0],
          [1, 10],
          [2, 20],
          [3, 10],
          [4, 27],
          [5, 15],
          [6, 20],
          [7, 10],
          [8, 20],
          [9, 16],
          [10, 22],
          [11, 10],
          [12, 20],
          [13, 10],
          [14, 27],
          [15, 20],
          [16, 10],
          [17, 15],
          [18, 12],
          [19, 27],
          [20, 20],
          [21, 15],
          [22, 0],
        ],
        color: '#ffba57',
        lines: {
          show: true,
          fill: true,
          lineWidth: 2
        },
        points: {
          show: true,
          radius: 3,
          fill: true,
          fillColor: '#fff'
        },
        curvedLines: {
          apply: false,
        }
      }], this.chartOption);

    }, 75);
  }

}
