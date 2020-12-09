import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';



@Injectable()
  export class lingua {
    public ita: Boolean = true;
    constructor(public router:Router) {}
    setValue(ita) {
      this.ita = ita;
    }
    getValue() {
      return this.ita;
    }
    lang(){
      this.ita = !this.ita;
      //this.router.renavigate();
      //this.router.navigate(['Home']);
    }
}
