import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.scss']
})
export class PostThumbnailComponent {
  @Input() postTitle = '';
  @Input() postLink = '';
  @Input() postImg = '';
  @Input() postDesc = '';

  @Output() buttonClick= new EventEmitter<string>();

  constructor(private router: Router){
  }

  viewPost(): void{
    this.router.navigate(['/post/id']);
  }

}
