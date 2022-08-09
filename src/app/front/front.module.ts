import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front/front.component';
import {FormsModule} from "@angular/forms";
import { FrontAccueilComponent } from './front-accueil/front-accueil.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { AccueilComponent } from './accueil/accueil.component';
import {FrontTempModule} from "../templates/front-temp/front-temp.module";
import { ChallengesComponent } from './challenges/challenges.component';


@NgModule({
  declarations: [
    FrontComponent,
    FrontAccueilComponent,
    DecouverteComponent,
    AccueilComponent,
    ChallengesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontRoutingModule,
    FrontTempModule
  ]
})
export class FrontModule { }
