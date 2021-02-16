import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  mainTriangleEmitter = new EventEmitter();
  aboutTriangleEmitter = new EventEmitter();
  scrollEmitter = new EventEmitter();

  showMainTriangles(){
    this.mainTriangleEmitter.emit('ee');
  }

  hideMainTriangles(){

  }

  showAboutTriangles(){

  }

  hideAboutTriangles(){

  }

  scrollPerspective(scroll: number){

  }
}
