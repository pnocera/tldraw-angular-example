import { Component, OnDestroy } from '@angular/core';
import { App, Tldraw } from '@tldraw/tldraw';

import type { ComponentProps } from 'react';
import { Utils } from './utils/urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  Tldraw = Tldraw;
  props!: ComponentProps<typeof Tldraw>;
  app!: App;
  darkmode = false;

  constructor() {
    const assetsurl = Utils.getAssetUrlsByMetaUrl({
      baseUrl: 'http://localhost:4200',
    });

    this.props = {
      assetUrls: assetsurl,

      onMount: this.handleMount.bind(this),
    };
  }
  ngOnDestroy(): void {
    this.app?.dispose();
  }

  toggleDarkMode() {
    this.darkmode = !this.darkmode;
    this.app.setDarkMode(this.darkmode);
  }

  handleMount(app: App) {
    this.app = app;
    app.setGridMode(true);

    app.updateInstanceState({
      isDebugMode: false,
    });

    app.updateUserDocumentSettings({
      isDarkMode: this.darkmode,
      isSnapMode: true,
    });
  }
}
