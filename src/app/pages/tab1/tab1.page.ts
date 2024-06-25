import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  habilitado = true;
  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.siguientes();
  }


  recargar( event?: any) {
    this.siguientes( event, true);    
    this.posts = [];
    this.habilitado = true;
  }
  siguientes ( event?: any, pull: boolean = false){

    this.postService.getPosts( pull ).subscribe(
      resp => {
        this.posts.push(...resp.posts);

        if(event){
          event.target.complete();
        }

        if(resp.posts.length === 0) {
          this.habilitado = false;
        }
      }
    );
  }
}
