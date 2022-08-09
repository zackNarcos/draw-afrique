import {Component, OnInit} from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '', title: 'Accueil', class: 'da-active'},
  {path: 'decouverte', title: 'Decouverte', class: 'da-active'},
  {path: 'classement', title: 'Classement', class: 'da-active'},
  {path: 'challenges', title: 'Challenges', class: 'da-active'},
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
