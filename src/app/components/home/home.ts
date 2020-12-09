declare var TimelineMax:any;

import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import "gsap";
import {lingua} from '../../services/lingua';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES,],
  pipes: []
})
export class Home {
  c: Boolean = true;


  ngOnInit() {
    this.c=this.leng.getValue();
    var obj = document.getElementsByClassName('hero');
    var tl = new TimelineMax();
    tl.from(obj, 1, { x:1000 });
    tl.play();
  }

  constructor(public leng: lingua){

  
  }
}
