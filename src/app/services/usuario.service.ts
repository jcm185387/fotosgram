import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token: string = '';
  constructor(private httpClient: HttpClient,
              private storage: Storage
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


   async guardarToken ( token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }
}
