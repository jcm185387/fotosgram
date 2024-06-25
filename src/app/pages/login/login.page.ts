import { Component,  ElementRef,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

 import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})




export class LoginPage implements OnInit {

  
  @ViewChild('swiperPrincipal') swiperRef!: ElementRef;

  constructor(private usuarioService: UsuarioService,
              private navController: NavController
  ) { 

  }


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

  loginUser = {
    email: 'prueba7@hotmail.com',
    password: 'passs'
  }

  // myswiper = {
  //   allowTouchMove: false,
  //   cssMode: true,
  //   initialSlide: 1
  // }

  ngAfterViewInit(){

  }

  ngOnInit() {  
    // setTimeout(() => {
    //   console.log("mames",this.swiperRef.nativeElement);
    // }, 1000); 
    
    // this.swiperRef?.nativeElement.swiper.cssMode (true);
    // this.swiperRef?.nativeElement.swiper.allowTouchMove (false);
    console.log("ngoninit");
  }

  ionViewDidEnter	 (){
    console.log("ionViewDidEnter");

  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");

    this.swiperRef.nativeElement.swiper.allowTouchMove = false;
    console.log("Index number of currently active slide", this.swiperRef.nativeElement.swiper.allowTouchMove)

  }

  async login (fLogin: NgForm) {

    if( fLogin.invalid ){
      return;
    }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password);
    console.log(fLogin.valid);
    console.log(this.loginUser);

    if(valido){
      //navegar al tabs
      this.navController.navigateRoot('/main/tabs/tab1', { animated: true });
    }else{
      //mostrar alerta de usuario y contraseña no correcto
    }
  }



  registro ( fRegistro: NgForm) {
    console.log(fRegistro.valid);

  }

  seleccionarAvatar ( avatar: any) {
    this.avatars.forEach( av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  mostrarRegistro() {    

    this.swiperRef.nativeElement.swiper.allowTouchMove = true;
    this.swiperRef.nativeElement.swiper.slideTo(1);
    this.swiperRef.nativeElement.swiper.allowTouchMove = false;



  }

  mostrarLogin() {

    this.swiperRef.nativeElement.swiper.allowTouchMove = true;
    this.swiperRef.nativeElement.swiper.slideTo(0);
    this.swiperRef.nativeElement.swiper.allowTouchMove = false;
  }

}
