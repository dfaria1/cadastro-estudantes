import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  estudante = "Danilo"

}
//"estudantes" equivale ao "heroes"
//ng generate component heroes