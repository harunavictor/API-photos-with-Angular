import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DevotionalsComponent } from "./devotionals/devotionals.component";
import { AlbumComponent } from "./albums/album/album.component";
import { PhotosComponent } from "./albums/photos/photos.component";

const routes: Routes = [
  { path: "", component: AlbumComponent },
  { path: "photos/:albumId", component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
