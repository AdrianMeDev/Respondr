import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: L.Map;

  getMap(): L.Map | undefined {
    return this.map;
  }

  setMap(map: L.Map): void {
    this.map = map;
  }

  addLayer(layer: L.Layer): void {
    this.map?.addLayer(layer);
  }
}
