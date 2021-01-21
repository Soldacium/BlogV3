import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  viewPost(){

  }

}
