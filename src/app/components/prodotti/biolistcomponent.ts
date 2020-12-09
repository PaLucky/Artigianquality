
import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Mortadellebio, prodottiService} from './itemservice';
//import {Items, ItemService} from './itemservice';
import {Router, RouteParams} from 'angular2/router';
import {EllipsisPipe} from './ellipsis.pipe';
import {lingua} from '../../services/lingua';

@Component({
  pipes: [EllipsisPipe],
  directives: [CORE_DIRECTIVES],
  template: `
    <div class="box" *ngIf="c">
      <div class="dscrz">
        <h3 class="title">
          <img src="images/t2.svg" alt="">
        </h3>
        <p>
          <span class="fr">La Mortadella è il salume d’eccellenza di Bologna, tanto che nel mondo è conosciuta semplicemente come la Bologna.</span>
        </p>
        <p>
          Artigianquality la produce proprio dentro le antiche mura della città. L’azienda
          fonda le sue origini nell’esperienza trentennale dell’artigiano Silvio Scapin che,
          grazie alla sua costante ricerca ed innovazione, offre prodotti di qualità superiore,
          nel rispetto dell’antica tradizione bolognese.
        </p>
        <p>
          Il nostro impegno nel privilegiare sempre la qualità delle materie prime e
          l’artigianalità della lavorazione delle nostre mortadelle permette ora alla nostra
          clientela di portare in tavola i primi ed unici salumi certificati biologici prodotti
          a Bologna: la Mortadella Sette Chiese e il Salame Rosa.
        </p>
        <p>
          Essi sono il risultato della nostra scelta di utilizzare una filiera corta,
          carni nazionali biologiche allevate su territorio locale, ed una lavorazione priva
          di logiche e di macchinari industriali. <br>
          I nostri prodotti sono inoltre privi di farine, latte, lattosio, derivati dal latte,
          coloranti e polifosfati aggiunti.
        </p>
        <p>
          L’assenza di sottoprodotti della carne come cotenna ed emulsione di cotenna
          dona alla Mortadella Sette Chiese e al Salame Rosa Biologico un’altissima digeribilità.
          Il sogno della nostra azienda è di creare prodotti biologici d’eccellenza, offrendo
          così un percorso gastronomico tutto al naturale.
        </p>
        <p><span class="fr">
          La nostra missione rimane invariata nel tempo
          anche nel biologico: l’eccellenza è solo artigianale.
        </span></p>
      </div>
      <div class="prods2">
        <div class="prod" *ngFor="let mortadella of mortadellebio" (click)="onSelect(mortadella)">
          <img src="{{mortadella.titolo}}" alt="" class="">
          <div class="wrap-img">
            <img src="{{mortadella.img}}" alt="" class="m-img">
            <img *ngIf="mortadella.logo" src={{mortadella.logo}} alt="" class="m-logo2">
          </div>
          <p>{{mortadella.descrizione | ellipsis:120 }}</p>
        </div>
      </div>
    </div>
    <div class="box" *ngIf="!c">
      <div class="dscrz">
        <h3 class="title">
          <img src="images/t22.svg" alt="">
        </h3>
        <p>
          <span class="fr">Mortadella is Bologna's finest cured meat, which is why it is known worldwide simply as Bologna sausage.</span>
        </p>
        <p>
          At Artigianquality we produce our fine, handcrafted mortadella within the walls of this ancient
          city. The company is firmly founded on the thirty­year­long experience of Silvio Scapin who,
          thanks to his constant research and innovation, offers superior quality products that respect
          Bologna's antique traditions.
        </p>
        <p>
          Our commitment lies in selecting the finest quality ingredients and handcrafting them so our
          customers can enjoy the first and only certified organic cured meat products made in Bologna: our
          Mortadella Sette Chiese and Salame Rosa.
        </p>
        <p>
          These exceptional products are the result of a deliberate decision to use a short supply chain,
          locally sourced organic meats and a non­industrial process based on craftsmanship, not machinery.
          Our products are free of flour, milk, lactose, milk derivatives, colouring agents and added
          polyphosphates.
        </p>
        <p>
          The complete absence of meat by­products, such as pork rind and pork rind emulsion also means
          that our Mortadella Sette Chiese and Salame Rosa Biologico are easy to digest.
          At Artigianquality our dream is to create fine quality organic products and offer a gastronomic
          experience that is completely natural.
        </p>
        <p><span class="fr">
          Our mission is always the same, with our organic products too: true excellence is only
          handcrafted.
        </span></p>
      </div>
      <div class="prods2">
        <div class="prod" *ngFor="let mortadella of mortadellebio" (click)="onSelect(mortadella)">
          <img src="{{mortadella.titolong}}" alt="" class="">
          <div class="wrap-img">
            <img src="{{mortadella.img}}" alt="" class="m-img">
            <img *ngIf="mortadella.logo" src={{mortadella.logo}} alt="" class="m-logo2">
          </div>
          <p>{{mortadella.descrizioneng | ellipsis:120 }}</p>
        </div>
      </div>
    </div>
  `,
})
export class BioListComponent implements OnInit {
  c: Boolean = true;

  mortadellebio: Mortadellebio[];

  private _selectedId: number;

  constructor(
    public leng: lingua,
    private _service: prodottiService,
    private _router: Router,
    private _routeParams: RouteParams,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  isSelected(mortadellebio: Mortadellebio) { return mortadellebio.id === this._selectedId; }

  ngOnInit() {
    this._service.getMortadellebio().then(mortadellebio => this.mortadellebio = mortadellebio);
    this.c=this.leng.getValue();
  }

  onSelect(mortadellebio: Mortadellebio) {
    this._router.navigate( ['Dettaglio', { id: mortadellebio.id }]  );
  }
}
