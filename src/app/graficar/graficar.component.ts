import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Registro } from '../registro';
import { CittService } from '../citt.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-graficar',
  templateUrl: './graficar.component.html',
  styleUrls: ['./graficar.component.css']
})
export class GraficarComponent implements OnInit {

  width = '700';
  height = '700';
  type = 'multilevelpie';
  dataFormat = 'json';
  dataSource;

  // "plotTooltext": "$label, $value, $percentValue"
  
  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Resumen de eventos: Encuesta de Satisfaccion",
        "subCaption": "CITT DUOC AVaras",
        "captionFontSize": "16",
        "subcaptionFontSize": "14",
        "baseFontColor": "#333333",
        "baseFont": "Helvetica Neue,Arial",
        "basefontsize": "12",
        "subcaptionFontBold": "0",
        "bgColor": "#ffffff",
        "canvasBgColor": "#ffffff",
        "showBorder": "0",
        "showShadow": "0",
        "showCanvasBorder": "0",
        "pieFillAlpha": "60",
        "pieBorderThickness": "2",
        "hoverFillColor": "#cccccc",
        "pieBorderColor": "#ffffff",
        "useHoverColor": "1",
        "showValuesInTooltip": "1",
        "showPercentInTooltip": "0",
        "numberPrefix": "",
        "plotTooltext": "$value, $percentValue"
      },
      "category": [
        {
          "label": "Global de eventos",
          "color": "#ffffff",
          "value": "30",
          "category": [
            {
              "label": "Operador 1",
              "color": "#f8bd19",
              "value": "10",
              "category": [
                {
                  "label": "Deficiente",
                  "color": "#f8bd19",
                  "value": "2"
                },
                {
                  "label": "Suficiente",
                  "color": "#f8bd19",
                  "value": "3"
                },
                {
                  "label": "Normal",
                  "color": "#f8bd19",
                  "value": "4"
                },
                {
                  "label": "Bien",
                  "color": "#f8bd19",
                  "value": "1"
                },
                {
                  "label": "Excelente",
                  "color": "#f8bd19",
                  "value": "0"
                }
              ]
            },
            {
              "label": "Operador 2",
              "color": "#e44a00",
              "value": "15",
              "category": [
                {
                  "label": "Deficiente",
                  "color": "#e44a00",
                  "value": "2"
                },
                {
                  "label": "Suficiente",
                  "color": "#e44a00",
                  "value": "3"
                },
                {
                  "label": "Normal",
                  "color": "#e44a00",
                  "value": "4"
                },
                {
                  "label": "Bien",
                  "color": "#e44a00",
                  "value": "1"
                },
                {
                  "label": "Excelente",
                  "color": "#e44a00",
                  "value": "5"
                }
              ]
            },
            {
              "label": "Operador 3",
              "color": "#008ee4",
              "value": "12",
              "category": [
                {
                  "label": "Deficiente",
                  "color": "#008ee4",
                  "value": "2"
                },
                {
                  "label": "Suficiente",
                  "color": "#008ee4",
                  "value": "4"
                },
                {
                  "label": "Normal",
                  "color": "#008ee4",
                  "value": "2"
                },
                {
                  "label": "Bien",
                  "color": "#008ee4",
                  "value": "1"
                },
                {
                  "label": "Excelente",
                  "color": "#008ee4",
                  "value": "3"
                }              ]
            }
          ]
        }
      ]
    }
  }

  ngOnInit() {
  }

}
