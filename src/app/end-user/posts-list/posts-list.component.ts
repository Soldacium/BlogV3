import { Component } from '@angular/core';
import { SearchOptions } from '@shared/models/search-options.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  blur = false;

  mouseOverThumbnail(item: any): void{

  }
}
