import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {

  private statusConexao$ = new Subject<boolean>();

  constructor() {
    window.addEventListener('online', () => this.atualizarStatusConexao());
    window.addEventListener('offline', () => this.atualizarStatusConexao());
  }

  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  get statusConxao(): Observable<boolean> {
    return this.statusConexao$.asObservable();
  }

  atualizarStatusConexao() {
    this.statusConexao$.next(this.isOnline);
  }

}
