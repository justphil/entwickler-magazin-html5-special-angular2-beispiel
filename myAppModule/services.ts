// Ein Service ist einfach eine ES6/TypeScript Klasse!
class HobbiesService {
    private _hobbies: Array<string>;

    constructor() {
        this._hobbies = ['Rafting', 'Skiing', 'Music'];
    }

    get hobbies(): Array<string> {
        return this._hobbies;
    }
}

export {HobbiesService};
