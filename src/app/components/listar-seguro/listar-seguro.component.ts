import { SeguroService } from './../../services/seguro.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Seguro } from 'src/app/models/seguro';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-listar-seguro',
  templateUrl: './listar-seguro.component.html',
  styleUrls: ['./listar-seguro.component.css']
})
export class ListarSeguroComponent implements OnInit {

  f_firstPanel = true;
  dataSource = new SeguroDataSource(this.seguroService);
  //dataSource: Observable<Seguro[]>;
  displayedColumns: string[] = ['id', 'marcaCarro', 'nomeProprietario', 'opcoes'];

  constructor(private seguroService: SeguroService) { }

  ngOnInit(): void {
    //this.dataSource = this.seguroService.listar();
  }

}

export class SeguroDataSource extends DataSource<Seguro> {
  constructor(private seguroService: SeguroService) {
    super();
  }
  connect(): Observable<Seguro[]> {
    return this.seguroService.listar();
  }
  disconnect() { }
}
