///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

import {SeedApp} from './app/seed-app';
import {lingua} from './app/services/lingua';

bootstrap(SeedApp, [HTTP_PROVIDERS,lingua,ROUTER_PROVIDERS,ANGULAR2_GOOGLE_MAPS_PROVIDERS])
  .catch(err => console.error(err));
