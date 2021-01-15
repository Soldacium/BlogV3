import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input()
  text = '';

  @Input()
  img = '';

  @Output() onclick:
  EventEmitter<Event> = new EventEmitter<Event>();

  clickButton(event: Event): void{
    this.onclick.emit(event);
  }
}
