import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HazardsHttpService {
  http: HttpClient = inject(HttpClient);

  getHazards(): any {
    return this.http.get(
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
    );
  }
}
