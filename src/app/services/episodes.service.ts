import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Episode } from "../models/episode.interface";

@Injectable({
  providedIn: "root",
})
export class EpisodesService {
  constructor(private http: HttpClient) {}

  getAllEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(
      "https://api.tvmaze.com/shows/530/episodes"
    );
  }

  getEpisodeById(id: String): Observable<Episode> {
    return this.http.get<Episode>("https://api.tvmaze.com/episodes/" + id);
  }
}
