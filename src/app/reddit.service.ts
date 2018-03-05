import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class RedditService {

  rall = 'https://www.reddit.com/r/all.json?jsonp=JSONP_CALLBACK';
  raww = 'https://www.reddit.com/r/aww.json?jsonp=JSONP_CALLBACK';
  rfunny = 'https://www.reddit.com/r/funny.json?jsonp=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp) { }

  get_rall():Observable<Post[]> {
    return this.jsonp.get(this.rall).map(data => {

      var posts:Post[] = [];
      let children = data.json().data.children;

      for(var i=0; i<children.length; i++) {

        let post:Post = new Post();

        post.title = children[i].data.title;
        post.url = children[i].data.url;

        if (children[i].data.post_hint === 'image'){
          post.post_hint = true;
        } else {
          post.post_hint = false;
        }

        posts.push(post);
      }
      return posts;
    })
  }

  get_raww():Observable<Post[]> {
    return this.jsonp.get(this.raww).map(data => {

      var posts:Post[] = [];
      let children = data.json().data.children;

      for(var i=0; i<children.length; i++) {

        let post:Post = new Post();

        post.title = children[i].data.title;
        post.url = children[i].data.url;

        if (children[i].data.post_hint === 'image'){
          post.post_hint = true;
        } else {
          post.post_hint = false;
        }

        posts.push(post);
      }
      return posts;
    })
  }

  get_rfunny():Observable<Post[]> {
    return this.jsonp.get(this.rfunny).map(data => {

      var posts:Post[] = [];
      let children = data.json().data.children;

      for(var i=0; i<children.length; i++) {

        let post:Post = new Post();

        post.title = children[i].data.title;
        post.url = children[i].data.url;

        if (children[i].data.post_hint === 'image'){
          post.post_hint = true;
        } else {
          post.post_hint = false;
        }

        posts.push(post);
      }
      return posts;
    })
  }

}
