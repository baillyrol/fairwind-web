import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
    selector: 'fairwind-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        const map = new L.Map('map-id-1').setView([50.853986, 4.346919], 8);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        const markersCluster = L.markerClusterGroup();
        markersCluster.addLayer(new L.Marker(new L.LatLng(50.853986, 4.346919)));
        markersCluster.addLayer( new L.Marker(new L.LatLng(50.830372, 4.357154)));
        markersCluster.addLayer( new L.Marker(new L.LatLng(50.820372, 4.257154)));
        markersCluster.addLayer( new L.Marker(new L.LatLng(50.840372, 4.367154)));
        markersCluster.addLayer( new L.Marker(new L.LatLng(50.831372, 4.361154)));

        map.addLayer(markersCluster);
    }
}
