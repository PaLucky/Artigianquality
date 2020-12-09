import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {BioListComponent} from './biolistcomponent';
import {BioDetailComponent} from './biodetailcomponent';
import {prodottiService} from './itemservice';
import {lingua} from '../../services/lingua';


@Component({
  selector: 'bio',
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [prodottiService],
  directives: [RouterOutlet]
})

@RouteConfig([
  {path:'/', name: 'Biologico', component: BioListComponent, useAsDefault: true},
  {path:'/:id', name: 'Dettaglio', component: BioDetailComponent}
])

export class Bio{
  c: Boolean = true;

  constructor(public leng: lingua){}

  ngOnInit() {
    this.c=this.leng.getValue();
  }

}
