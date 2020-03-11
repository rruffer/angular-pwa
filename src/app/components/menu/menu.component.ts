import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    routeLinks: any[];
    activeLinkIndex = -1;

  constructor(private router: Router) {
        this.routeLinks = [
            {
                label: 'Cadastrar Seguro',
                link: './cadastro',
                index: 0
            }, {
                label: 'Listar Seguros',
                link: './listar',
                index: 1
            }
        ];
  }

  ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });

  }

}
