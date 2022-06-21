/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from '@workadventure/scripting-api-extra';

// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    if (
      WA.room.id ===
      'https://play.workadventu.re/_/0her91z7fqh/localhost:3000/arcteryx_internal.json'
    ) {
      WA.ui.openPopup(
        'popupRectangle',
        `Bienvenue chez ARC'TERIX Metashop !\n\n N'hésitez à vous rendre dans l'espace VIP localisé dans l'angle supérieur gauche de la boutique pour vous connecter à votre espace client.\n\n\nNous vous souhaitons un bon shopping !`,
        [
          {
            label: 'Close',

            className: 'primary',

            callback: (popup) => {
              // Close the popup when the "Close" button is pressed.

              popup.close();
            },
          },
        ]
      );
    }
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {})
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

export {};
