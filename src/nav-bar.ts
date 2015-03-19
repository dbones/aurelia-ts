/// <reference path="../typings/tsd.d.ts" />

import {Behavior} from 'aurelia-framework';
import {Component} from './annotations';

@Component({
    metadata: Behavior.withProperty('router')
})
export class NavBar {
}
