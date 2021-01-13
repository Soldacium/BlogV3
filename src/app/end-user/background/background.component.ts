import { Component, OnInit } from '@angular/core';
import { BackgroundEngineService } from './backgroud-engine.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  canvas!: HTMLCanvasElement | null;
  constructor(private engine: BackgroundEngineService) { }

  ngOnInit(): void {
    this.setupCanvas();
  }

  setupCanvas(): void {
    this.canvas = document.querySelector('#renderCanvas');
    if (this.canvas !== null){
      this.engine.init(this.canvas);
      this.engine.animate();
    }


  }

}
