import {Component, OnInit} from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent implements OnInit {
  constructor() {
    console.log("Le composant est instancié !");
  }
  public ngOnInit(): void {
    console.log("Le composant est initialisé !")
  }

  public ngAfterViewInit() {
    console.log("La vue est chargée !")
  }

  public ngOnDestroy() {
    console.log("Le composant est détruit ! ")
  }

}
