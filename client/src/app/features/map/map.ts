import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './services/map-service';
import { HazardsLayer } from '../hazards/components/hazards-layer/hazards-layer';
import { HazardsHttpService } from '../hazards/services/hazards-http.service';

@Component({
  selector: 'app-map',
  imports: [HazardsLayer],
  templateUrl: './map.html',
  styleUrl: './map.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  mapService = inject(MapService);
  hazardService = inject(HazardsHttpService);

  readonly mapElement = viewChild<ElementRef<HTMLDivElement>>('mapDiv');

  ngAfterViewInit(): void {
    const elementRef = this.mapElement();
    if (!elementRef) {
      return;
    }

    const map = L.map(elementRef.nativeElement).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    this.mapService.setMap(map);

    this.hazardService.getHazards().subscribe((data: any) => {
      console.log('Hazard data:', data);
      data.features.forEach((feature: any) => {
        const coords = feature.geometry.coordinates;
        const magnitude = feature.properties.mag;
        const place = feature.properties.place;

        const marker = L.circleMarker([coords[1], coords[0]], {
          radius: magnitude * 2,
          color: 'red',
        }).addTo(map);

        marker.bindPopup(`Magnitude: ${magnitude}<br>Location: ${place}`);
      });
    });
  }
}
