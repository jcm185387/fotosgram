import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private postService: PostsService,
                private route: Router
  ) {}
  

  tempImages: string[] = [];
  cargandoGeo = false;

  post = {
    mensaje: '',
    coords: '',
    posicion: false
  }
  
  async crearPost () {
    console.log("post a insertar", this.post );

    const creado = await this.postService.crearPost( this.post );
    this.post = {
      mensaje: '',
      coords: '',
      posicion: false
    }

    this.route.navigateByUrl('/main/tabs/tab1');

  }

  async getGeo(){
    

    if( !this.post.posicion ){
      this.post.coords = '';
      return;
    }
    // si no hay un coords no agrega nada al scope y no guarda nada
    this.cargandoGeo = true;
    
    const coordinates = await Geolocation.getCurrentPosition();


    const coords = `${ coordinates.coords.latitude}, ${ coordinates.coords.longitude }`;
    this.post.coords = coords;

    this.cargandoGeo = false;
  

    // printCurrentPosition = async () => {
    // const coordinates = await Geolocation.getCurrentPosition();
  
    // console.log('Current position:', coordinates);
  };

}
