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
import { FrontTarifComponent } from './front-tarif/front-tarif.component';
import { FrontLicenceComponent } from './front-licence/front-licence.component';
import { FrontCommandeComponent } from './front-commande/front-commande.component';
import { FormCmd1Component } from './form-cmd1/form-cmd1.component';
import { FormCmd2Component } from './form-cmd2/form-cmd2.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommissionComponent } from './commission/commission.component';
import { FrontAuthentificationComponent } from './front-authentification/front-authentification.component';


@NgModule({
  declarations: [
    FrontComponent,
    FrontAccueilComponent,
    DecouverteComponent,
    AccueilComponent,
    ChallengesComponent,
    FrontTarifComponent,
    FrontLicenceComponent,
    FrontCommandeComponent,
    FrontAuthentificationComponent,
    FormCmd1Component,
    FormCmd2Component,
    SignInComponent,
    SignUpComponent,
    CommissionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontRoutingModule,
    FrontTempModule
  ]
})
export class FrontModule { }
