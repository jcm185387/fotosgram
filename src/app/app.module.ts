import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient  } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot()

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(), IonicStorageModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
