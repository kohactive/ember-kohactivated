ember-kohactivated
==============================================================================

**[At Kohactive we develop a lot of Ember.js applications.](https://kohactive.com)** We found ourselves using the same addons and config files across repos, so we extracted all of that into an addon in order to jump-start new projects.

The generator for this addon does most of the heavy lifting. This is by design, to be transparent about the npm packages and files added.

Installation
------------------------------------------------------------------------------

```
ember install ember-kohactivated
```

or

```
npm install --save-dev ember-kohactivated
ember g ember-kohactivated
```


Usage
------------------------------------------------------------------------------

### Addons Included:

- `active-model-adapter` - We build our APIs in Ruby on Rails with Active Model Serializers
- `ember-cli-dotenv` - For managing environment variables
- `ember-cli-flash` - Flash messages
- `ember-cli-mirage` - Factories, fixtures, and stubs for API routes
- `ember-cli-sass` - Use scss pre-processor
- `ember-data-has-many-query` - Add query params to an async `hasMany` API call
- `ember-get-config` - Easier access to app config vars
- `ember-lodash` - Lodash. For Ember.
- `ember-moment` - Time and data display, parsing, and mathing
- `ember-simple-auth` - Authentication with API
- `ember-truth-helpers` - Simple logic in templates

### Optional:

- `ember-bootstrap` - Bootstrap CSS framework
- `ember-cli-cloudinary` - Cloudinary image manipulation and uploader


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-kohactivated`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
