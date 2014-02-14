var util = require('util');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

var terminalNotifier = function(msgParams) {
  var params = msgParams.join(" ");
  var cmd = "terminal-notifier " + params;
  return cmd;
}

var NotificationReporter = function(helper, logger, config) {
  var log = logger.create('reporter.notificationCenter');

  this.adapters = [];

  this.onBrowserComplete = function(browser) {
    var results = browser.lastResult;
    var time = helper.formatTimeInterval(results.totalTime);
    var msg = "";
    var title = "";
    var msgParams = [];

    if (results.disconnected || results.error) {
      // return growly.notify(MSG_ERROR, optionsFor('error', browser.name));
      msg = "'Karma Testing Aborted due to error'";
      title = "'Karma ABORTED - " + browser.name + "'";

    } else if (results.failed) {
      // return growly.notify(util.format(MSG_FAILURE, results.failed, results.total, time),
      //     optionsFor('failed', browser.name));
      msg = util.format("'%d/%d tests failed in %s.'", results.failed, results.total, time);
      title = "'Karma FAILURE - " + browser.name + "'";
    } else {
      msg = util.format("'%d tests passed in %s.'", results.success, time);
      title = "'Karma SUCCESS - " + browser.name + "'";
    }

    msgParams.push("-message");
    msgParams.push(msg);
    msgParams.push("-title");
    msgParams.push(title);
    exec(terminalNotifier(msgParams), function(error, stdout, stderr) { });
  };
};

NotificationReporter.$inject = ['helper', 'logger','config.notificationCenterReporter'];

module.exports = {
  'reporter:notificationCenter': ['type', NotificationReporter]
};
