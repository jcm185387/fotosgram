import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post, RespuestaPost } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;
  nuevoPost = new EventEmitter<Post>();
  constructor( private http: HttpClient,
                private usuarioService: UsuarioService
  ) { }

  getPosts( pull: boolean = false) {

    if ( pull ){
      this.paginaPosts = 0;
    }
    this.paginaPosts ++;
    return this.http.get<RespuestaPost>(`${ URL }/posts/?pagina=${ this.paginaPosts }`);
  }

  crearPost( post: any ){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise ( resolve => {
      this.http.post(`${ URL }/posts`, post, { headers })
      .subscribe( resp => {
        //console.log(resp);
        const auxPost = JSON.parse(JSON.stringify(resp));
        //console.log("aux;    ", aux);
        this.nuevoPost.emit( auxPost.post );
        resolve(true);
  
      });
    });


  }
}
