import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent  implements OnInit {
 
  @Output() avatarSel = new EventEmitter<string>();
 
  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

  //avatardelusuario: string | undefined;
  @Input() avatarActual: string | undefined = 'av-1.png';
  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit() {
    // //console.log(this.usuarioService.getUsuario());
    // this.avatardelusuario = this.usuarioService.getUsuario().avatar;
    // //pasamos todos a falso

    // this.avatars.forEach( av => av.seleccionado = false);
    // //obtener el avatar correspondiente
    // let avatarNuevo = this.avatars.find( av => av.img == this.avatardelusuario );
    this.avatars.forEach( av => av.seleccionado = false);

    for (const avatar of this.avatars){{}
      if( avatar.img === this.avatarActual){
        avatar.seleccionado  = true;
        break;
      }
    }

    
    

  }

  seleccionarAvatar ( avatar: any) {
    this.avatars.forEach( av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.avatarSel.emit( avatar.img );
    console.log(avatar.img);
  }

}
