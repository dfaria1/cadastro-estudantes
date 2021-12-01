import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudante: Estudante = {
    id: 1,
    name: 'Danilo'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
//"estudantes" equivale ao "heroes"
//ng generate component heroes