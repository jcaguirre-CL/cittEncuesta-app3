import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Registro } from '../registro';
import { CittService } from '../citt.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  registros: Registro[];
  displayedColumns = ['Fecha Evento', 'Atencion', 'Valoracion', 'Correo'];
  dataSource = new MatTableDataSource();

  constructor(
    private messageService: MessageService,
    private cittService: CittService) { }
  ngOnInit() {
    this.getRegistros();
  }

  getRegistros(): void {
    this.cittService.getRegistros()
      .subscribe(registros => this.registros = registros);
  }

}
