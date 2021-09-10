import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button nbButton class="idle-button" *ngIf="!value"></button>
  <button nbButton hero status="info" *ngIf="value == 'X'"><i class="fas fa-times fa-fw"></i></button>
  <button nbButton hero status="danger" *ngIf="value == 'O'">O</button>
  `,
  styleUrls: ["square.component.scss"]
})
export class SquareComponent implements OnInit {

  @Input() value: "X" | "O";

  constructor() { }

  ngOnInit(): void {
  }

}
