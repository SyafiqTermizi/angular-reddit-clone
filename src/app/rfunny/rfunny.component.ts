import { Component, OnInit } from '@angular/core';

import { RedditService } from '../reddit.service';
import { Post } from '../post';

@Component({
  selector: 'app-rfunny',
  templateUrl: './rfunny.component.html',
  styleUrls: ['./rfunny.component.scss'],
  providers: [RedditService]
})
export class RfunnyComponent implements OnInit {

  posts: Post[];

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.get_post();
  }

  get_post(): void {
    this.redditService.get_rfunny()
      .subscribe(posts => this.posts = posts);
  }

}
