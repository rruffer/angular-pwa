import { SeguroService } from './../../services/seguro.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Seguro } from 'src/app/models/seguro';

@Component({
  selector: 'app-listar-seguro',
  templateUrl: './listar-seguro.component.html',
  styleUrls: ['./listar-seguro.component.css']
})
export class ListarSeguroComponent implements OnInit {

  public seguros$: Observable<Seguro[]>;

  constructor(private seguroService: SeguroService) { }

  ngOnInit(): void {
    this.seguros$ = this.seguroService.listar();
  }



}
