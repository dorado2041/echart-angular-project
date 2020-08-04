import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartService } from './echarts/echart.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicLineEchartsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    NgxEchartsModule
  ],
  providers: [EchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
