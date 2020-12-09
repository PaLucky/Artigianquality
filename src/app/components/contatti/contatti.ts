import {Component} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {lingua} from '../../services/lingua';
import {ContactService, Email} from '../../services/contact';


@Component({
  selector: 'contatti',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES,FORM_DIRECTIVES], // this loads all angular2-google-maps directives in this component
  templateUrl: 'app/components/contatti/contatti.html',
  providers: [ContactService],
})
export class Contatti {
  c: Boolean = true;
  zoom: number = 13;
  lat: number = 44.4943042;
  lng: number = 11.34047;

  public message: Email = {name: '', email: '', message: ''};

  onSubmit() {
      this._contactService.postEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }

    handleResponse(response){

      if(response.status =='success'){
        this.message = {name: '', email: '', message: ''};
        alert('Mail Inviata! Grazie per averci contattato');
      }

      if(response.status =='error'){
        alert('Errore, riprova più tardi');
      }
    }

  markers: marker[] = [
  {
    lat: 44.474017,
    lng: 11.376108,
    label: 'ArtigianQuality',
    draggable: false
  },
  {
    lat: 44.488594,
    lng: 11.350664,
    label: 'Bottega',
    draggable: false
  }
  ];
  ngOnInit() {
    this.c=this.leng.getValue();
  }

  constructor(public leng: lingua, private _contactService : ContactService){
  }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}




/*
export class Contatti {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  markers: marker[] = [
  {
    lat: 51.673858,
    lng: 7.815982,
    label: 'ArtigianQuality',
    draggable: false
  }
  ]
}


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}




*/
