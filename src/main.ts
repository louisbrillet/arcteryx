/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from '@workadventure/scripting-api-extra';

// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log('Scripting API Extra ready');
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach((iframe) => (iframe.style.backgroundColor = 'white'));
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

export {};
