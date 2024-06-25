import {  NgModule } from '@angular/core';
import { CommonModule   } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
