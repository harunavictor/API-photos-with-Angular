import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material-module';
import { NavComponent } from './devotionals/nav/nav.component';
import { DevotionalsComponent } from './devotionals/devotionals.component';
import { AlbumComponent } from './albums/album/album.component';
import { PhotosComponent } from './albums/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DevotionalsComponent,
    AlbumComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
