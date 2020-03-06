import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.iniciarLinks();
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === this.router.url));
  });

  }

  private iniciarLinks() {
    this.navLinks = [
      {
        label: 'Cadastrar Seguro',
        link: '/cadastro',
        index: 0
      }, {
        label: 'Listar Seguros',
        link: '/listar',
        index: 1
      },
    ];
  }

}
