import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class EndUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  onActivate(event: Event): void {
    window.scroll(0, 0);
  }

}
