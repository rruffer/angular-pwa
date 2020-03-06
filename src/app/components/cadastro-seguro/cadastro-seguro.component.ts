import { SeguroService } from './../../services/seguro.service';
import { MarcaCarroService } from './../../services/marca-carro.service';
import { MarcaCarro } from './../../models/marca-carro';
import { Seguro } from './../../models/seguro';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

public seguro = new Seguro();
public marcasCarro$: Observable<MarcaCarro[]>;

  constructor(private marcaCarroService: MarcaCarroService, private seguroService: SeguroService) { }

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  adicionar() {
    this.seguro.id = this.seguro.placaCarro;
    this.seguroService.cadastrar(this.seguro);
  }

  enviarNotificacao() {

  }

}
