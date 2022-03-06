// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1/ordermeal/',
  mealTypeUrl: 'http://localhost:8080/api/v1/ordermeal/mealtype',
  mealSizeUrl: 'http://localhost:8080/api/v1/ordermeal/mealsize',
  mealUrl: 'http://localhost:8080/api/v1/ordermeal/meal',
  dailyMenuUrl: 'http://localhost:8080/api/v1/ordermeal/dailymenu',
  weeklyMenuUrl: 'http://localhost:8080/api/v1/ordermeal/weeklyMenu',
  usersUrl: 'http://localhost:8080/api/v1/ordermeal/users',
  orderUrl: 'http://localhost:8080/api/v1/ordermeal/order',
  roleAdmin: 'ROLE_ADMIN',
  roleUser: 'ROLE_USER',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
