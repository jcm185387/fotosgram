import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  implements OnInit {

  //@Input() post: Post =  {};
  @Input() post: Post= {};
  img1 = '/assets/perro-1.jpg';
  img2 = '/assets/perro-2.jpg';
  img3 = '/assets/perro-3.jpg';



  constructor() { }

  ngOnInit() {
    //console.log("post del post", this.post);

  }

}
