import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() usuario:any = "";
  @Input() numero:number = 0;
  
  nombre:string;
  email:string;
  id: number;
  imgUrl:string;

  constructor() { }

  ngOnInit(): void {
    this.nombre = this.usuario.name;
    this.email = this.usuario.email;
    this.imgUrl = `https://loremflickr.com/320/240/person?random=${this.numero}`
    this.id= this.usuario.id;
    
  }

}
