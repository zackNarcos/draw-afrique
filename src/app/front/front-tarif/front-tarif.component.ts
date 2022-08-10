import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-tarif',
  templateUrl: './front-tarif.component.html',
  styleUrls: ['./front-tarif.component.css']
})
export class FrontTarifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  id:any = "10"

  tabChange(ids:any){
    this.id=ids
  }

}
