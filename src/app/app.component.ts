import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimate } from './common/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerAnimate]
})
export class AppComponent {
  title = 'curso-pwa-angular';

  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;

    return res;
  }

}
