/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from '@workadventure/scripting-api-extra';

// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log('Scripting API Extra ready');
        const head = parent.document.getElementsByTagName('head')[0];
        console.log('head');
        console.log(head);
        const htmlParent = head.parentElement;
        console.log('htmlParent');
        console.log(htmlParent);
        const iframeParent = htmlParent && htmlParent.parentElement;
        console.log('iframeParent');
        console.log(iframeParent);
        console.log('windowFrameElement');
        console.log(window.frameElement);
        console.log(window.parent);
        console.log(window.top);
        console.log(window.document);
        const link = document.createElement('link');
        link.id = 'customIframeId';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href =
          'https://thibaudnavarre.github.io/arcteryx-outside-map/customCss.css';
        link.media = 'all';
        head.appendChild(link);
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

export {};
