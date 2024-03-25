
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{
  squares!:any[];
  xIsNext!:boolean;
  winner!:string

  constructor() {
  }

  ngOnInit(): void {
    }

}
