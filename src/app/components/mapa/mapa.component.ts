import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent  implements OnInit {

  //@Input() coords: string = '';
  //usuario: Usuario = {};
  @Input() coords: string | undefined = '';
  @ViewChild('mapa') mapa!: ElementRef;


  constructor() { 
    console.log("constructor");

  }

  ngOnInit() {
    


  }
  ngAfterContentInit(){


  }

  ngAfterContentChecked(){


  }

  ngAfterViewChecked(){

  }


  ngAfterViewInit (){
    if (this.coords){

        const latLng = this.coords.split(',');

        const lat = Number(latLng[0]);
        const lng = Number(latLng[1]);
    
    
        mapboxgl.accessToken = 'pk.eyJ1IjoiamNtMTg1Mzg3IiwiYSI6ImNrbGZvZ3dnOTBzZmoyb211N25sd3c5ZXUifQ.u8nUXah4fMXaIPBiJVTh-w';
        const map = new mapboxgl.Map({
            container: this.mapa.nativeElement , // container ID
            center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 15 // starting zoom
        });
        
        const marker = new mapboxgl.Marker()
          .setLngLat( [lng, lat])
          .addTo( map );
    }
  }


}
