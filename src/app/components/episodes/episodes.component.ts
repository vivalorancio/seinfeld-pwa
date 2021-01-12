import { Component, OnInit } from "@angular/core";
import { Episode } from "src/app/models/episode.interface";
import { EpisodesService } from "src/app/services/episodes.service";

@Component({
  selector: "app-episodes",
  templateUrl: "./episodes.component.html",
  styleUrls: ["./episodes.component.css"],
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];
  constructor(private episodesService: EpisodesService) {}

  ngOnInit() {
    this.episodesService
      .getAllEpisodes()
      .subscribe((episodes) => (this.episodes = episodes));
  }
}
