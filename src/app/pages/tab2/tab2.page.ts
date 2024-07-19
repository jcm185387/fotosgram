import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

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
    coords: null,
    posicion: false
  }
  
  async crearPost () {
    console.log( this.post );

    const creado = await this.postService.crearPost( this.post );
    this.post = {
      mensaje: '',
      coords: null,
      posicion: false
    }

    this.route.navigateByUrl('/main/tabs/tab1');

  }

  getGeo(){
    

    if( !this.post.posicion ){
      this.post.coords = null;
      return;
    }

    this.cargandoGeo = true;

    console.log(this.post);
  }

}
