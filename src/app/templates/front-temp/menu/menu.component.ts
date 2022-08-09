import {Component, OnInit} from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: 'accueil', title: 'Accueil', class: ''},
  {path: 'decouverte', title: 'Decouverte', class: ''},
  {path: 'classement', title: 'Classement', class: ''},
  {path: 'challenges', title: 'Challenges', class: ''},
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
