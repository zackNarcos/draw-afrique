import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontComponent} from "./front/front.component";
import {FrontAccueilComponent} from "./front-accueil/front-accueil.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {DecouverteComponent} from "./decouverte/decouverte.component";

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
        path: 'licence',
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(frontRoutes)],
  exports: [RouterModule]
})
export class FrontRoutingModule {
}
