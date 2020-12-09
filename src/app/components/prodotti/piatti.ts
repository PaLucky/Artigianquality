import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {PiattiListComponent} from './piattilistcomponent';
import {PiattoDetailComponent} from './piattodetailcomponent';
import {prodottiService} from './itemservice';
import {lingua} from '../../services/lingua';

@Component({
  selector: 'piatti',
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [prodottiService],
  directives: [RouterOutlet]
})

@RouteConfig([
  {path:'/', name: 'Piatti', component: PiattiListComponent, useAsDefault: true},
  {path:'/:id', name: 'Dettaglio', component: PiattoDetailComponent}
])

export class Piatti{
  c: Boolean = true;

  constructor(public leng: lingua){}

  ngOnInit() {
    this.c=this.leng.getValue();
  }

}
