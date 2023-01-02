const chalk = require(`chalk`);

const { timestampToDate, toBoolean } = require(`segmisc`);

/******************************************************************************/

// const exOptions = {
//   type: `alert`, // the type of message that's being logged - possibilities: `alert`, `exception`, `attempt`, `success`, `info`
//   showTimestamp: true, // if you want the timestamp printed in the logged message
//   showPID: false, // if you want the process ID printed in the logged message - useful for multi-threaded programs
//   showType: false, // if you want the type of message printed in the logged message
//   db: undefined, // the connection object for whatever database you're using if you're logging the messages into a database
//   dbType: `none`, // the type of database you're using if you're logging the messages into a database - possibilites: `mongodb`, `mysql`
//   dbSync: false, // whether or not to perform database logging synchronously (true) or asynchronously (false)
//   dbOnly: false, // whether to only log the data to a database and ignore the console
//   consoleOnly: false, // whether to only log the data to a console, despite possibly being provided database details
// };
function log(str, options) {
  // fill in the options with defaults where necessary
  options = options !== undefined ? options : {
    type: `generic`,
    showTimestamp: true,
    showPID: false,
    showType: false,
    db: undefined,
    dbType: `none`,
    dbSync: false,
    dbOnly: false,
    consoleOnly: false,
  };
  options.type = options.type !== undefined ? options.type : `generic`;
  options.showTimestamp = options.showTimestamp !== undefined ? toBoolean(options.showTimestamp) : true;
  options.showPID = options.showPID !== undefined ? toBoolean(options.showPID) : false;
  options.showType = options.showType !== undefined ? toBoolean(options.showType) : false;
  // skip options.db as the default is undefined
  options.dbType = options.dbType !== undefined ? options.dbType : `none`;
  options.dbSync = options.dbSync !== undefined ? toBoolean(options.dbSync) : false;
  options.dbOnly = options.dbOnly !== undefined ? toBoolean(options.dbOnly) : false;
  options.consoleOnly = options.consoleOnly !== undefined ? toBoolean(options.consoleOnly) : false;

  // determine what color the message is based on the log type and the text for the type
  let r = 0;
  let g = 0;
  let b = 0;
  let type = ``;
  switch (options.type.toLowerCase()) {
    case `alert`:
    case `!`:
    case `warning`:
    case `warn`:
      r = 255;
      g = 127;
      b = 31;
      type = `  ALERT  `;
      break;
    case `error`:
    case `err`:
    case `fail`:
    case `failure`:
      r = 255;
      g = 31;
      b = 31;
      type = `  ERROR  `;
      break;
    case `exception`:
    case `ex`:
      r = 255;
      g = 31;
      b = 255;
      type = `EXCEPTION`;
      break;
    case `attempt`:
    case `try`:
      r = 255;
      g = 255;
      b = 31;
      type = ` ATTEMPT `;
      break;
    case `success`:
    case `ok`:
    case `okay`:
    case `confirm`:
      r = 31;
      g = 255;
      b = 31;
      type = ` SUCCESS `;
      break;
    case `info`:
    case `inf`:
      r = 100;
      g = 100;
      b = 255;
      type = `  INFO   `;
      break;
    default:
      r = 191;
      g = 191;
      b = 191;
      options.showType = false;
      break;
  }

  // TODO implement options to show less of the timestamp's parts - seconds, year, month, date, etc...

  // format the string with various elements depending on the provided options
  // TODO implement dbOnly
  let formattedStr = ``;
  let firstStr;
  if (options.showTimestamp === true) {
    if (firstStr === undefined) {
      firstStr = `timestamp`;
    }
    if (firstStr === `timestamp`) {
      formattedStr += `${timestampToDate()} ¦`;
    } else {
      formattedStr += ` ${timestampToDate()} ¦`;
    }
  }
  if (options.showPID === true) {
    if (firstStr === undefined) {
      console.log(`fisrStr undefined`);
      firstStr = `pid`;
    }
    if (firstStr === `pid`) {
      console.log(`firstStr true`);
      formattedStr += `${process.pid} ¦`;
    } else {
      formattedStr += ` ${process.pid} ¦`;
    }
  }
  if (options.showType === true) {
    if (firstStr === undefined) {
      firstStr = `type`;
    }
    if (firstStr === `type`) {
      formattedStr += `${type} ¦`;
    } else {
      formattedStr += ` ${type} ¦`;
    }
  }
  if (options.showTimestamp === false && options.showPID === false && options.showType === false) {
    formattedStr = `${str}`;
  } else {
    formattedStr += ` ${str}`;
  }

  // print the formatted string
  console.log(chalk.rgb(r, g, b)(formattedStr));

  // TODO implement database logging
  // TODO implement consoleOnly
}

/******************************************************************************/

function logAlert(str, options) {
  if (options === undefined || typeof options !== `object`) {
    options = {
      type: `alert`,
    };
  } else {
    options.type = `alert`;
  }

  this.log(str, options);
}
const logWarning = logAlert(); // an alternative name for the logAlert function

/******************************************************************************/

function logError(str, options) {
  if (options === undefined || typeof options !== `object`) {
    options = {
      type: `error`,
    };
  } else {
    options.type = `error`;
  }

  this.log(str, options);
}

/******************************************************************************/

function logException(str, options) {
  if (options === undefined || typeof options !== `object`) {
    options = {
      type: `exception`,
    };
  } else {
    options.type = `exception`;
  }

  this.log(str, options);
}

/******************************************************************************/

function logAttempt(str, options) {
  if (options === undefined || typeof options !== `object`) {
    options = {
      type: `attempt`,
    };
  } else {
    options.type = `attempt`;
  }

  this.log(str, options);
}

/******************************************************************************/

function logSuccess(str, options) {
  if (options === undefined || typeof options !== `object`) {
    options = {
      type: `success`,
    };
  } else {
    options.type = `success`;
  }

  this.log(str, options);
}

/******************************************************************************/

function logInfo(str, options) {
  if (options === undefined || typeof options !== `object`) {
    options = {
      type: `info`,
    };
  } else {
    options.type = `info`;
  }

  this.log(str, options);
}

/******************************************************************************/

module.exports = {
  log,
  logAlert,
  logWarning,
  logError,
  logException,
  logAttempt,
  logSuccess,
  logInfo,
};
