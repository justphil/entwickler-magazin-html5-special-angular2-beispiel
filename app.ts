/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {HobbiesService} from 'myAppModule/services';
import {HobbiesWidget} from 'myAppModule/widgets';

@Component({
    selector: 'my-app',
    appInjector: [HobbiesService]
})
@View({
    template: `
        <h1>My Angular 2 App</h1>
        <p>They call me {{ name }}.</p>
        <p>My hobbies are:</p>
        <hobbies-widget [hobbies]="hobbies"></hobbies-widget>
    `,
    directives: [HobbiesWidget]
})
class RootComponent {
    name: string;
    hobbies: Array<string>;

    constructor(hobbiesService: HobbiesService) {
        this.name = 'Bob';
        this.hobbies = hobbiesService.hobbies;
    }
}

bootstrap(RootComponent);
