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

To add a new detector a new component is needed with three files at least including:

* `new-detector.component.html`
* `new-detector.component.ts`
* `new-detector.component.css`

This can be done by going into the Phoenix app and writing in the command line:

```bash
python add_detector_component.py 
    -d <detector-gltf-filepath> 
    -n <detector-name>
```

The code also deletes the `app.module.ts` and `main.component.html` files and re-adds them so that the detector is added to the list of ILD detectors and also so the routing works. Once these changes are committed to the main branch of the repository, the gh-page should rebuild with the new detector.

## Converting a dd4hep.root event file to json

The conversion of a dd4hep.root event file to json can be completed using the EDM4hep framework. The command line to complete this action is written below:

```bash
edm4hep2json <some-events.edm4hep.root>
```

The command will output the simulation as a root file which can then be imported into the ILD Phoenix Event Display.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
