
import {Component, OnInit} from 'angular2/core';
import {Mortadelle, prodottiService} from './itemservice';
//import {Items, ItemService} from './itemservice';
import {Router, RouteParams} from 'angular2/router';
import {EllipsisPipe} from './ellipsis.pipe';
import {lingua} from '../../services/lingua';

@Component({
  pipes: [EllipsisPipe],
  template: `
    <div class="box">
      <div class="prods">
        <div class="prod" *ngFor="let mortadella of mortadelle" (click)="onSelect(mortadella)">
          <img src="{{mortadella.titolo}}" *ngIf="c" alt="" class="m-img">
          <img src="{{mortadella.titolong}}" *ngIf="!c" alt="" class="m-img">
          <div class="wrap-img">
            <img src="{{mortadella.img}}" alt="" class="m-img">
            <img *ngIf="mortadella.logo" src={{mortadella.logo}} alt="" class="m-logo">
          </div>
          <p *ngIf="c">{{mortadella.descrizione | ellipsis:120 }}</p>
          <p *ngIf="!c">{{mortadella.descrizioneng | ellipsis:120 }}</p>
        </div>
      </div>
    </div>
  `,
})
export class ProdottiListComponent implements OnInit {
  c: Boolean = true;

  mortadelle: Mortadelle[];

  private _selectedId: number;

  constructor(
    public leng: lingua,
    private _service: prodottiService,
    private _router: Router,
    private _routeParams: RouteParams,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  isSelected(mortadelle: Mortadelle) { return mortadelle.id === this._selectedId; }

  ngOnInit() {
    this._service.getMortadelle().then(mortadelle => this.mortadelle = mortadelle);
    this.c=this.leng.getValue();
  }

  onSelect(mortadelle: Mortadelle) {
    this._router.navigate( ['Dettaglio', { id: mortadelle.id }]  );
  }
}
