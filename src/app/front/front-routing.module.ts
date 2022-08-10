import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontComponent} from "./front/front.component";
import {FrontAccueilComponent} from "./front-accueil/front-accueil.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {DecouverteComponent} from "./decouverte/decouverte.component";
import { FrontTarifComponent } from './front-tarif/front-tarif.component';
import { FrontLicenceComponent } from './front-licence/front-licence.component';
import { FrontCommandeComponent } from './front-commande/front-commande.component';
import { FormCmd1Component } from './form-cmd1/form-cmd1.component';
import { FormCmd2Component } from './form-cmd2/form-cmd2.component';
import { FrontAuthentificationComponent } from './front-authentification/front-authentification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommissionComponent } from './commission/commission.component';

const frontRoutes: Routes = [
  {
    path: 'front',
    component: FrontComponent,
    children: [
      {
        path: '',
        component: FrontAccueilComponent,
        children: [
          {
            path: 'decouverte',
            component: DecouverteComponent
          },
          {
            path: '',
            component: AccueilComponent
          },

        ]
      },
      {
        path: 'tarif',
        component: FrontTarifComponent
      },
      {
        path: 'licence',
        component: FrontLicenceComponent
      },
      {
        path: 'commande',
        component: FrontCommandeComponent,
        children: [
          {
            path: '',
            component: FormCmd1Component
          },
          {
            path: 'form2',
            component: FormCmd2Component
          },

        ]
      },
      {
        path: 'auth',
        component: FrontAuthentificationComponent,
        children: [
          {
            path: '',
            component: SignInComponent
          },
          {
            path: 'signup',
            component: SignUpComponent
          },
          {
            path: 'commission',
            component: CommissionComponent
          }

        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(frontRoutes)],
  exports: [RouterModule]
})
export class FrontRoutingModule {
}
