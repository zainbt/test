import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: '<h1>{{title}}</h1>',
    styles:[`
    h1{
        color: blue
    }`]
})

export class HelloWorldComponent{
    title = 'New Project';
}