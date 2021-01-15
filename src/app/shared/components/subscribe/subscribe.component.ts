import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {

  @Output() onclick:
  EventEmitter<Event> = new EventEmitter<Event>();

  clickButton(event: Event): void{
    this.onclick.emit(event);
  }

  subscribe(){
    
  }

}
