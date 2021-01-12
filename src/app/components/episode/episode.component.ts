import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Episode } from "src/app/models/episode.interface";
import { EpisodesService } from "src/app/services/episodes.service";

@Component({
  selector: "app-episode",
  templateUrl: "./episode.component.html",
  styleUrls: ["./episode.component.css"],
})
export class EpisodeComponent implements OnInit {
  episode: Episode;

  constructor(
    private episodesService: EpisodesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get("id");

    this.episodesService.getEpisodeById(identifier).subscribe((episode) => {
      if (!episode) {
        return this.router.navigateByUrl("/");
      }

      this.episode = episode;
    });
  }
}
