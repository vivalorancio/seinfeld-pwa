import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EpisodeComponent } from "./components/episode/episode.component";
import { EpisodesComponent } from "./components/episodes/episodes.component";

const routes: Routes = [
  { path: "", component: EpisodesComponent },
  { path: "episode/:id", component: EpisodeComponent },
  { path: "**", component: EpisodesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
