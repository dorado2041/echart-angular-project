import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from '../../echart.service';
import { BasicEchartLineModel } from '../../echart.model';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-basic-line-echarts',
  templateUrl: './basic-line-echarts.component.html',
  styleUrls: ['./basic-line-echarts.component.scss']
})
export class BasicLineEchartsComponent implements OnInit {

  _chartOption: EChartOption;
  subscription: Subscription;
  isDarkMode : boolean = false;
  _theme : string;
  constructor(private echartService: EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getbasicLineEchartData().subscribe(data => {
      this._initBasicLineEchart(data);
    });

  }

  private _initBasicLineEchart(chartData: BasicEchartLineModel[]) {

    this._theme = this.isDarkMode ? 'dark' : '';

    this._chartOption = {
      tooltip: {
        show: true
      },
      background: 'transparent',
      xAxis: {
        type: 'category',
        data: chartData.map(m => ({
          value: m.name
        }))
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: chartData.map(m => ({
          value: m.value
        })),
        type: 'line'
      }]
    };
  }

}
