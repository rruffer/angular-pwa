import { Network } from '@ngx-pwa/offline';
import { OnlineOfflineService } from './online-offline.service';
import { Seguro } from './../models/seguro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:3000/seguro';
  private db: Dexie;
  private table: Dexie.Table<Seguro, any> = null;

  constructor(private http: HttpClient, private network: Network, private onlineOfflineService: OnlineOfflineService) {
    network.onlineChanges.subscribe(
      data => console.log('status conexao: ' + data)
    );
    this.ouvirStatusConexao();
    this.iniciarIndexeDB();
  }

  private cadastrarApi(seguro: Seguro) {
    this.http.post(`${this.API_SEGUROS}`, seguro).subscribe(
      () => alert('Seguro foi cadastrado com sucesso!'),
      err => console.log('Erro ao cadastra seguro')
    );
  }

  cadastrar(seguro: Seguro) {
    if (this.onlineOfflineService.isOnline) {
      this.cadastrarApi(seguro);
    } else {
      this.salvarIndexedDB(seguro);
    }
  }

  private async salvarIndexedDB(seguro: Seguro) {

    try {
      await this.table.add(seguro);
      const todosSeguros: Seguro[] = await this.table.toArray();
      console.log('Seguro foi salvo no IndexDB', todosSeguros);
    } catch (error) {
      console.log('Erro ao incluir seguro no banco de dados', error);
    }

  }

  private async enviarSegurosDataBase() {
    const todosSeguros: Seguro[] = await this.table.toArray();

    for (const seguro of todosSeguros) {
        this.cadastrarApi(seguro);
        await this.table.delete(seguro.id);
        console.log(`Seguro com o id ${seguro.id} foi deletado!`);
    }
  }

  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API_SEGUROS);
  }

  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConxao.subscribe(online => {
      if (online) {
        this.enviarSegurosDataBase();
      } else {
        console.log('estou offline');
      }
    });
  }

  private iniciarIndexeDB() {
    this.db = new Dexie('db-seguros');
    this.db.version(1).stores({
      seguro: 'id'
    });
    this.table = this.db.table('seguro');

  }

}
