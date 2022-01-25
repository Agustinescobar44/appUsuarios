import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listaUsuarios: any[] = []
  loading = true;
  constructor(private _usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios():void {
    this._usuarioService.getUsuario().subscribe({
      next: d =>{
          this.loading = false;
          d.data.forEach(usuario => {
            this.listaUsuarios.push(usuario);
          });
      }
    })
  }

}
