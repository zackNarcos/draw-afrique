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
import { CollectionComponent } from './collection/collection/collection.component';
import { SousCollectionComponent } from './collection/sous-collection/sous-collection.component';
import { SousCollectionLinkComponent } from './collection/sous-collection-link/sous-collection-link.component';


@NgModule({
  declarations: [
    FrontComponent,
    FrontAccueilComponent,
    DecouverteComponent,
    AccueilComponent,
    ChallengesComponent,
    CollectionComponent,
    SousCollectionComponent,
    SousCollectionLinkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontRoutingModule,
    FrontTempModule
  ]
})
export class FrontModule { }
