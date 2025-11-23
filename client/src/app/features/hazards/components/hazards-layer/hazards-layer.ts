import { AfterViewInit, Component, inject } from '@angular/core';

import * as L from 'leaflet';
import { MapService } from '../../../map/services/map-service';

@Component({
  selector: 'app-hazards-layer',
  imports: [],
  templateUrl: './hazards-layer.html',
  styleUrl: './hazards-layer.css',
})
export class HazardsLayer implements AfterViewInit {
  mapService = inject(MapService);

  ngAfterViewInit(): void {
    const map = this.mapService.getMap();
    if (map) {
      const marker = L.marker([51.5, -0.09]).bindPopup('Hazards layer example marker');
      this.mapService.addLayer(marker);
      // go to the marker
      map.setView([51.5, -0.09], 13);
    }
  }
}
