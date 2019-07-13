import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ExperimentsComponent} from './experiments/experiments.component';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';
declare var require:any;
@Component({
  selector: 'app',
   moduleId: module.id,
   templateUrl: './app.component.html',
  styles: ['./app.component.css'],
  providers: [StateService, ExperimentsService]
})
export class AppComponent {}
