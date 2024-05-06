import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/models/module';
@Component({
  selector: 'app-display-location',
  templateUrl: './display-location.page.html',
  styleUrls: ['./display-location.page.scss'],
})
export class DisplayLocationPage implements OnInit {

  zoom = 12;
  center: google.maps.LatLng;
  position: any;
  label: any;
  title: any;

   constructor(private route: ActivatedRoute, private router: Router) {
    this.center = new google.maps.LatLng(53.338545, -6.26607); // dublin
    this.route.queryParams.subscribe(params => {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras.state) {
        const module: Module = currentNavigation.extras.state['module'];
        const lat = parseFloat(module.lat);
        const long = parseFloat(module.long);

        this.position = new google.maps.LatLng(lat, long);
        this.label = module.moduleName;
        this.title = module.moduleName;
    }
});
  }

  ngOnInit() {
  }

}
