# PhoenixForIld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Adding a new detector

To add a new detector a new component is needed with two files at least including:

* `new-detector.component.html`
* `new-detector.component.ts`

This can be done by going into the Phoenix app and writing in the command line:
```

ng generate component new-detector
```

The code in the other detector .component.html and .component.ts files needs to be copied over to the new detector files. Then the detector can be added to list on the `main component` list and the new-detector can be routed.

To changed the detector geometry you need your detector in a .gltf file format (this can be done by using the `xml2gltf converter in the root2gltf repository`). This file should be added to `assets/detectors` and then the detector file should be changed in `new-detector.component.ts`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
