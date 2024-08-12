import { Component, OnInit } from '@angular/core';
import {EventDisplayService, EventDataImportOption, EventDataFormat} from 'phoenix-ui-components';
import { Configuration, PhoenixLoader, PresetView, ClippingSetting, PhoenixMenuNode} from 'phoenix-event-display';

@Component({
  selector: 'app-ild',
  templateUrl: './ild-display-v11.component.html',
  styleUrl: './ild-display-v11.component.scss'
})
export class ILDDisplayComponent2 implements OnInit {
  events: any;

  /** The root Phoenix menu node. */
  phoenixMenuRoot = new PhoenixMenuNode("Phoenix Menu", 'pheonix-menu');

  loaded = false;
  loadingProgress = 0;

  eventDataImportOptions: EventDataImportOption[] = [
    EventDataFormat.EDM4HEPJSON,
  ];

  constructor(private eventDisplay: EventDisplayService) {};

  ngOnInit() {
    // Create the event display configuration
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        // simple preset views, looking at point 0,0,0 and with no clipping
        new PresetView('Left View', [0, 0, -1200], [0, 0, 0], 'left-cube', ClippingSetting.On, 340, 120),
        new PresetView('Center View', [-500, 1200, 0], [0, 0, 0], 'top-cube', ClippingSetting.On, 340, 120),
        // more fancy view, looking at point 0,0,5000 and with some clipping
        new PresetView('Global View', [1800, 1800, 1800], [0, 0, 0], 'perspective', ClippingSetting.On, 340, 120),
      ],
      // default view with x, y, z of the camera and then x, y, z of the point it looks at
      defaultView: [1800, 1800, 1800, 0, 0 ,0],
      phoenixMenuRoot: this.phoenixMenuRoot,
      // Event data to load by default
      defaultEventFile: {
        // (Assuming the file exists in the `src/assets` directory of the app)
        eventFile: 'assets/jive_xml_event_data.xml',
        eventType: 'jivexml'
      },
    };

    // Initialize the event display
    this.eventDisplay.init(configuration);

    // Load detector geometry (assuming the file exists in the `src/assets` directory of the app)
    this.eventDisplay.loadGLTFGeometry('assets/detectors/ILD_l5_v11_edited4.gltf', undefined, undefined, 1, true);

    this.eventDisplay
        .getLoadingManager()
        .addProgressListener((progress) => (this.loadingProgress = progress));

    this.eventDisplay
        .getLoadingManager()
        .addLoadListenerWithCheck(() => (this.loaded = true));
  }
}
