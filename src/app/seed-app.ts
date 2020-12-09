import {Component} from 'angular2/core';
//import {Injectable} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';
import {Route, Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Location} from 'angular2/platform/common';

import "gsap";

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Prodotti} from './components/prodotti/prodotti';
import {Piatti} from './components/prodotti/piatti';
import {Bio} from './components/prodotti/bio';
import {Contatti} from './components/contatti/contatti';

import {lingua} from './services/lingua';

@Component({
  selector: 'seed-app',
  templateUrl: 'app/seed-app.html',
  directives: [ROUTER_DIRECTIVES,CORE_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ],
  host: {
    '(window:scroll)' : 'scroll($event)',
    '[class.scrolled]' : 'PORCODIO'
  }
})
@RouteConfig([
  new Route({ path: '/', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/about', component: About, name: 'About'}),
  new Route({ path: '/prodotti/...', component: Prodotti, name: 'Prodotti'}),
  new Route({ path: '/piatti/...', component: Piatti, name: 'Piatti'}),
  new Route({ path: '/biologico/...', component: Bio, name: 'Biologico'}),
  new Route({ path: '/contatti', component: Contatti, name: 'Contatti'}),
])

export class SeedApp {
  PORCODIO:Boolean;
  cane:Boolean = false;
  x: Location;
  c: Boolean = true;
  nav: Boolean = false;

  open(){
    this.nav = !this.nav;
    this.cane = !this.cane;
  }

	scroll(e){
    if((window.pageYOffset === 0) && (this.x.platformStrategy.path() === "/")){
      console.log(window.pageYOffset);
      this.PORCODIO = false;
    }
    else {this.PORCODIO = true;}
  }
  artigian(){
    if(this.x.platformStrategy.path() === "/"){
      window.scrollTo(0, window.innerHeight);
    }
    else{
      this.router.navigate(['Home']);
      setTimeout(function(){ window.scrollTo(0, window.innerHeight); }, 100);
    }
  }

  lang2 (){
  	this.leng.lang();
    this.router.navigate(['Contatti']);
    this.router.navigate(['Home']);
  	this.c=this.leng.getValue();
    //console.log(this.c);

  }
  constructor(public router:Router, public location: Location, public leng: lingua){
    this.x = location;
    router.subscribe(() => {
	    window.scrollTo(0, 0);
	    if(this.x.platformStrategy.path() !== "/"){
	      this.PORCODIO = true;
	    }
	    else{
	      this.PORCODIO = false;
	    }
    });

  }
  ngOnInit() {

  }
}
