import { Component, OnInit } from '@angular/core';

import { RedditService } from '../reddit.service';
import { Post } from '../post';

@Component({
  selector: 'app-raww',
  templateUrl: './raww.component.html',
  styleUrls: ['./raww.component.scss'],
  providers: [RedditService] 
})
export class RawwComponent implements OnInit {

  posts: Post[];

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.get_post();
  }

  get_post(): void {
    this.redditService.get_raww()
      .subscribe(posts => this.posts = posts);
  }

}
