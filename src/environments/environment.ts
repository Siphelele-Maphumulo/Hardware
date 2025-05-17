// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBY3Sfork3oMSXgDsmymDelMcku9ctk3MA",
    authDomain: "harware-8f5e9.firebaseapp.com",
    projectId: "harware-8f5e9",
    storageBucket: "harware-8f5e9.appspot.com",
    messagingSenderId: "162423168685",
    appId: "1:162423168685:web:23de3cfbe4e6b35fcdb024",
    measurementId: "G-VECW99Z6VL"
  }

  //  payfast: {
  //   merchantId: '16622380',          // Your test merchant ID
  //   merchantKey: '6xj8jmkyv1lpg',    // Your test merchant key
  //   //passphrase: 'your_passphrase',  // Only if you set one
  //   sandbox: true,                  // true for testing
  //   returnUrl: 'http://localhost:8100/payment-success',
  //   cancelUrl: 'http://localhost:8100/payment-cancel',
  //   notifyUrl: 'http://your-backend.com/payfast-webhook' // For payment notifications
  // }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
