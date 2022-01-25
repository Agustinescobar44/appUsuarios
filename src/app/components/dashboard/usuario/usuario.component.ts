import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  loading = true;
  id:number;
  nombre:string = "";
  email:string = "";
  genero:string = "";
  urlImg:string = "";

  constructor(private idRoute: ActivatedRoute, private _usuarioService: UsuarioService) { 
    this.id = +this.idRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
    this.urlImg=`https://loremflickr.com/320/240/person?random=${this.id}`
  }
  getUsuario() {
    this._usuarioService.getUsuarioId(this.id).subscribe({
      next: usuario => {
        console.log(usuario);
        
        usuario = usuario.data
        this.nombre = usuario.name;
        this.email = usuario.email;
        this.genero = usuario.gender
        this.loading = false;
      }
    })
  }

}
