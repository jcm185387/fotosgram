import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token: string = '';
  private usuario: Usuario = {};
  constructor(private httpClient: HttpClient,
              private storage: Storage,
              private navController: NavController
   ) { 

    this.init();
   }


   async init(){
    const storage = await this.storage.create();

   }
   login( email: string, password: string){

    const data = { email, password };

    return new Promise( resolve => {
      this.httpClient.post(`${ URL}/user/login`, data)
      .subscribe( resp => {
        const respToken = JSON.parse(JSON.stringify(resp));
        console.log(respToken);
        if( respToken.ok ){
          this.guardarToken( respToken.tokenUser);          
        resolve(true);
        }else{
          this.token = '';
          this.storage.clear();
          resolve(false);
        }
      });
    });


   }

   registro ( usuario: Usuario){
    return new Promise( resolve => {
      this.httpClient.post(`${ URL }/user/create`, usuario)
        .subscribe( resp => {
          const respToken = JSON.parse(JSON.stringify(resp));
          if( respToken.ok ){
            this.guardarToken( respToken.tokenUser);          
          resolve(true);
          }else{
            this.token = '';
            this.storage.clear();
            resolve(false);
          }
        });
    });
   }


   async guardarToken ( token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if( !this.token ){
      this.navController.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve => {
      const headers = new HttpHeaders({
        'x-token' :this.token
      });
  
      this.httpClient.get(`${ URL }/user/`, { headers })
        .subscribe( resp => {
          const aux = JSON.parse(JSON.stringify(resp))
          if( aux.ok){
            this.usuario = aux.usuario;
            resolve(true);
          }else{
            this.navController.navigateRoot('/login');
            resolve(false);
          }
        });
    });

  }

  getUsuario () {

    if( !this.usuario._id) {
      this.validaToken();
    }
    return  { ...this.usuario }
  }

  actualizarUsuario (usuario: Usuario) {
    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {
      this.httpClient.post(`${ URL }/user/update`, usuario, { headers } )
      .subscribe( resp => {
        const aux = JSON.parse(JSON.stringify(resp))
  
        if( aux.ok ){
          console.log(aux);
          this.guardarToken( aux.tokenUser );
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });


  }
}
