/// <reference path="../typings/tsd.d.ts" />

import {Router, IRouterConfig} from 'aurelia-router';
import {Component} from './annotations';

@Component()
export class ChildRouter{

    router: Router;    
    heading: string;
    
    constructor(router: Router){

        this.heading = 'Child Router';
        this.router = router;

        router.configure((config: IRouterConfig) => {
            config.map([
                { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
                { route: 'flickr',        moduleId: 'flickr',       nav: true },
                { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
            ]);
        });
        
    }
}
