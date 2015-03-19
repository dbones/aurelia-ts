/// <reference path="../typings/tsd.d.ts" />

import {HttpClient} from 'aurelia-http-client';
import {Component} from './annotations';

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

@Component()
export class Flickr{

    heading: string;
    images: any[];
    http: HttpClient;

    constructor(http: HttpClient){
        this.heading = 'Flickr';
        this.images = [];
        this.http = http;
    }

    activate(){
      return this.http.jsonp(url).then((response) => {
        this.images = response.content.items;
      });
    }

    canDeactivate(){
      return confirm('Are you sure you want to leave?');
    }
}
