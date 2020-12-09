import {Component, OnInit}  from 'angular2/core';
import {Piatti, prodottiService}   from './itemservice';
import {RouteParams, Router} from 'angular2/router';
import {lingua} from '../../services/lingua';

@Component({
  templateUrl: 'app/components/prodotti/piatto.html'
})
export class PiattoDetailComponent implements OnInit  {
  piatto: Piatti;
  c: Boolean = true;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:prodottiService,
    public leng: lingua){}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getPiatto(id).then(piatto => this.piatto = piatto);
    this.c=this.leng.getValue();
  }
  /*
  gotoMortadelle() {
    let mortadellaId = this.mortadella ? this.mortadella.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    this._router.navigate(['Prodotti',  {id: mortadellaId} ]);
  }
  */
  goBack() {
    window.history.back();
  }
}
