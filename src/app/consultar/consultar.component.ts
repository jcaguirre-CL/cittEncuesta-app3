import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Registro } from '../registro';
import { CittService } from '../citt.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  registros: Registro[];
  displayedColumns = ['operador', 'ranking', 'correo', 'fechaevento'];
  dataSource = new RegistroDataSource(this.cittService);

  constructor(
    private messageService: MessageService,
    private cittService: CittService) { }
  ngOnInit() {
    // this.getRegistros();
  }

  // getRegistros(): void {
  //   this.cittService.getRegistros()
  //     .subscribe(registros => this.registros = registros);
  // }

}

export class RegistroDataSource extends DataSource<any> {
  constructor(private cittService: CittService) {
    super();
  }
  connect(): Observable<Registro[]> {
    return this.cittService.getRegistros();
  }
  disconnect() { }
}
