import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'fairwind-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(pos => {
      (mapboxgl as any).accessToken = 'pk.eyJ1Ijoicm9samVyZW0iLCJhIjoiY2tsbnU1eHhzMG1pODJ2cXJmc3NydXg5MyJ9.RnHfeXSW4zEcpYze5YzE3w';
      const map = new mapboxgl.Map({
        container: 'map-id',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [pos.coords.longitude, pos.coords.latitude], // starting position [lng, lat]
        zoom: 7
      });
      var marker = new mapboxgl.Marker()
          .setLngLat([pos.coords.longitude, pos.coords.latitude])
          .addTo(map);
    });
  }

}
