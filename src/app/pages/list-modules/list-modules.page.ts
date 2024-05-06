import { Component, OnInit } from '@angular/core';
import { GetModulesService } from 'src/app/services/get-modules.service';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.page.html',
  styleUrls: ['./list-modules.page.scss'],
})
export class ListModulesPage implements OnInit {

  constructor(private getModuleService: GetModulesService) { }

  modules: any

  getModuleData() {
    // Get the information from the API using Observable
    // by subscribing to the studentservice Observable 
    this.getModuleService.getData().subscribe(result => {
    this.modules = result;
    const modulesArray = this.modules.modules
    this.modules = modulesArray

    });
  }

  ngOnInit() {
    this.getModuleData()
  }


}
