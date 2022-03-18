const {
  log, logAlert, logWarning, logError, logException, logAttempt, logSuccess, logInfo,
} = require(`./index`);

function testLogAlert() {
  let str = `This is an alert. You should feel alerted.`;
  let options = {
    type: `alert`,
    showTimestamp: true,
    showPID: true,
    showType: true,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  log(str, options);
}
testLogAlert();

function testLogError() {
  let str = `This is an error. You should feel ashamed for what you did.`;
  let options = {
    type: `error`,
    showTimestamp: true,
    showPID: false,
    showType: true,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  log(str, options);
}
testLogError();

function testLogException() {
  let str = `This is an exception. The developer is probably more at blame here.`;
  let options = {
    type: `exception`,
    showTimestamp: false,
    showPID: false,
    showType: true,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  log(str, options);
}
testLogException();

function testLogAttempt() {
  let str = `This is an attempt. Maybe someday it will be successful.`;
  let options = {
    type: `attempt`,
    showTimestamp: false,
    showPID: true,
    showType: true,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  log(str, options);
}
testLogAttempt();

function testLogSuccess() {
  let str = `This is a success. It could've been a lot worse.`;
  let options = {
    type: `success`,
    showTimestamp: true,
    showPID: false,
    showType: false,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  log(str, options);
}
testLogSuccess();

function testLogInfo() {
  let str = `This is just some information. You can probably just ignore whatever this is.`;
  let options = {
    type: `info`,
    showTimestamp: true,
    showPID: true,
    showType: false,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  log(str, options);
}
testLogInfo();

function testLogGeneric() {
  let str = `This is a rather generic test. It accomplishes very little with its existence.`;
  log(str);
}
testLogGeneric();

function testLogNothing() {
  let str = `This is a test that shouldn't have anything appended to the front of it.`;
  let options = {
    type: `none`,
    showTimestamp: false,
    showPID: false,
    showType: false,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  log(str, options);
}
testLogNothing();

function testLogInfoSimple() {
  let str = `This is a test for the logInfo() function.`;
  logInfo(str);
}
testLogInfoSimple();

function testLogSuccessSimple() {
  let str = `This is a test for the logSuccess() function.`;
  logSuccess(str);
}
testLogSuccessSimple();

function testLogAttemptSimple() {
  let str = `This is a test for the logAttempt() function.`;
  logAttempt(str);
}
testLogAttemptSimple();

function testLogAlertSimple() {
  let str = `This is a test for the logAlert() function.`;
  logAlert(str);
}
testLogAlertSimple();

function testLogWarningSimple() {
  let str = `This is a test for the logWarning() function.`;
  logWarning(str);
}
testLogWarningSimple();

function testLogErrorSimple() {
  let str = `This is a test for the logError() function.`;
  logError(str);
}
testLogErrorSimple();

function testLogExceptionSimple() {
  let str = `This is a test for the logException() function.`;
  logException(str);
}
testLogExceptionSimple();
