
import {Component, OnInit} from 'angular2/core';
import {Piatti, prodottiService} from './itemservice';
//import {Items, ItemService} from './itemservice';
import {Router, RouteParams} from 'angular2/router';
import {EllipsisPipe} from './ellipsis.pipe';
import {lingua} from '../../services/lingua';


@Component({
  pipes: [EllipsisPipe],
  template: `
    <div class="box">
      <div class="plates">
        <div class="prod" *ngFor="let piatto of piatti" (click)="onSelect(piatto)">
          <img src="{{piatto.ghi}}" *ngIf="c" alt="" class="m-img">
          <img src="{{piatto.ghing}}" *ngIf="!c" alt="" class="m-img">
          <img src="{{piatto.img}}" alt="" class="m-img">
          <p *ngIf="c">{{piatto.descrizione | ellipsis:120 }}</p>
          <p *ngIf="!c">{{piatto.descrizioneng | ellipsis:120 }}</p>
        </div>
      </div>
    </div>
  `,
})
export class PiattiListComponent implements OnInit {
  c: Boolean = true;

  piatti: Piatti[];

  private _selectedId: number;

  constructor(
    public leng: lingua,
    private _service: prodottiService,
    private _router: Router,
    private _routeParams: RouteParams,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  isSelected(piatti: Piatti) { return piatti.id === this._selectedId; }

  ngOnInit() {
    this._service.getPiatti().then(piatti => this.piatti = piatti);
    this.c=this.leng.getValue();
  }

  onSelect(piatti: Piatti) {
    this._router.navigate( ['Dettaglio', { id: piatti.id }]  );
  }
}
