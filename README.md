# Dynamic Locale in Angular

This project is a showcase of how to...

* Change LOCALE_ID dynamically in Angular
* Force built-in Angular pipes to use the new LOCALE_ID
* Avoid reloading the app
* Ensure LocaleService works as singleton

**Note:** Although a complete refresh of the app is avoided, it is invitable to reload the route. Therefore, any requests for route resolution are repeated on language change. This, however, might even be the desired behavior, especially when content received from the server includes translations.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-dynamic-locale)

## Quickstart

* Make sure Node.js 8+ is installed in your OS.
* Clone the repo with git or download and unzip it.
* Open terminal and go to project folder.
* Run `npm` or `yarn` in terminal to install dependencies.
* Run `npm start` or `yarn start` in terminal to initiate the development server.
* Navigate to `http://localhost:4200` in your browser.
