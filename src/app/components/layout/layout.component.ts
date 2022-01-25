import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  irDashboard(): void{
    // hacer algo
    //redireccionar
    this._router.navigate(['/dashboard']);
  }
}
