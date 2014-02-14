# karma-notificationCenter-reporter

> Report test results using the OSX Notification Center

## Installation

**You must have OSX terminal-notifier installed (https://github.com/alloy/terminal-notifier) for this plugin to work.
The easiest way is to keep `karma-notificationCenter-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-notificationCenter-reporter": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-notificationCenter-reporter --save-dev
```

###

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'notificationCenter'],
  });
};
```

You can pass list of reporters as a CLI argument too:
```bash
karma start --reporters notificationCenter
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
