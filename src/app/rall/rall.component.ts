import { Component, OnInit } from '@angular/core';

import { RedditService } from '../reddit.service';
import { Post } from '../post';

@Component({
  selector: 'app-rall',
  templateUrl: './rall.component.html',
  styleUrls: ['./rall.component.scss'],
  providers: [RedditService]
})
export class RallComponent implements OnInit {

  posts: Post[];
  isOnline:boolean = false;

  if (navigator.OnLine) {
    console.log('die');
  }

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.get_post();
  }

  get_post(): void {
    this.redditService.get_rall()
      .subscribe(posts => this.posts = posts);
  }

}
