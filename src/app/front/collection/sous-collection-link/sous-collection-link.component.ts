import {Component, OnInit} from '@angular/core';

export interface LinkInfo {
  path: string;
  title: string;
}

export const LINK: LinkInfo[] = [
  {path: 'decouverte', title: 'Transport'},
  {path: 'decouverte', title: 'Mariage'},
  {path: 'decouverte', title: 'Voyage'},
  {path: 'decouverte', title: 'Repas familliale'},
  {path: 'decouverte', title: 'Paysage'},
  {path: 'decouverte', title: 'Marché'},
];

@Component({
  selector: 'app-sous-collection-link',
  templateUrl: './sous-collection-link.component.html',
  styleUrls: ['./sous-collection-link.component.css']
})
export class SousCollectionLinkComponent implements OnInit {

  public linkItems: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.linkItems = LINK.filter(linkItem => linkItem);
  }
}
