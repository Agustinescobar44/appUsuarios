import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anioActual:number;

  constructor() { }

  ngOnInit(): void {
    var curretTime = new Date()
    this.anioActual = curretTime.getFullYear();
  }

}
