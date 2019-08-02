import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "alert",
  template: `
    <h1 (click)="output.next('output')">Alert {{type}}</h1>
  `,
})
export class AlertComponent {
  @Input() type: string = "success";
  @Output() output = new EventEmitter();
}
