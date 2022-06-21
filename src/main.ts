/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from '@workadventure/scripting-api-extra';

// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log('Scripting API Extra ready');
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = 'customIframeId';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../customCss.css';
        link.media = 'all';
        head.appendChild(link);
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

export {};
