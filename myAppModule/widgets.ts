/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'hobbies-widget',
    properties: ['hobbies']
})
@View({
    template: `
    <ul>
      <li *ng-for="#hobby of hobbies">
        {{ hobby }}
      </li>
    </ul>
    `,
    directives: [NgFor]
})
class HobbiesWidget {}

export {HobbiesWidget};
