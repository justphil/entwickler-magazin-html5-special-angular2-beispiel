# entwickler-magazin-html5-special-angular2-beispiel
Das Angular 2 Beispiel aus dem Entwickler-Magazin Sonderheft zum Thema Cross-Plattform HTML5

## Ausführung
1.  TypeScript Typ-Definitionen für Angular 2 installieren (optional)
    `npm install -g tsd@^0.6.0` und `tsd install angular2 es6-promise rx rx-lite`
2.  TypeScript Compiler installieren
    `npm install -g typescript@^1.5.0`
3.  TypeScript Code zu JavaScript (ES5) kompilieren
    `tsc -m commonjs -t es5 --experimentalDecorators --emitDecoratorMetadata app.ts`
4.  Das Beispiel über einen Web-Server ausliefern, z.B. mithilfe des [http-server](https://www.npmjs.com/search?q=http-server) Moduls für [Node.js](https://nodejs.org/).
    `http-server`
5.  Im Browser die entsprechende URL öffnen, z.B. [http://localhost:8080/](http://localhost:8080/)
