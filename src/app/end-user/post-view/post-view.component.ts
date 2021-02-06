import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor() { }

  postComments = [
    {
      username: 'Guy123',
      comment: 'ye, this tutorial fucking sucks, didnt learn anything, moreover, i think i know less than i knew before',
      userID: '123',
      userImg: 'assets/images/temp/temp1.jpg',
      _id: '123',
      responses: []
    }
  ]

  commentInput = '';
  responseInput = '';
  isWritingResponse = '';

  ngOnInit(): void {
  }

  postComment(){

  }

  postResponse(comment: any){

  }

  deleteComment(){

  }

}
