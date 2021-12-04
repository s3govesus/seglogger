const chalk = require(`chalk`);

const { timestampToDate } = require(`segmisc`);

/******************************************************************************/

// const exOptions = {
//   type: `alert`, // the type of message that's being logged - possibilities: `alert`, `exception`, `attempt`, `success`, `info`
//   showTimestamp: true, // if you want the timestamp printed in the logged message
//   showPID: false, // if you want the process ID printed in the logged message - useful for multi-threaded programs
//   showType: false, // if you want the type of message printed in the logged message
//   db: undefined, // the connection object for whatever database you're using if you're logging the messages into a database
//   dbType: `none`, // the type of database you're using if you're logging the messages into a database - possibilites: `mongodb`, `mysql`
//   dbSync: false, // whether or not to perform database logging synchronously (true) or asynchronously (false)
// };
exports.log = (str, options) => {
  // fill in the options with defaults where necessary
  options = options !== undefined ? options : {
    type: `generic`,
    showTimestamp: true,
    showPID: false,
    showType: false,
    db: undefined,
    dbType: `none`,
    dbSync: false,
  };
  options.type = options.type !== undefined ? options.type : `generic`;
  options.showTimestamp = options.showTimestamp !== undefined ? options.showTimestamp : true;
  options.showPID = options.showPID !== undefined ? options.showPID : false;
  options.showType = options.showType !== undefined ? options.showType : false;
  // skip options.db as the default is undefined
  options.dbType = options.dbType !== undefined ? options.dbType : `none`;
  options.dbSync = options.dbSync !== undefined ? options.dbSync : false;

  // determine what color the message is based on the log type and the text for the type
  let r = 0;
  let g = 0;
  let b = 0;
  let type = ``;
  switch (options.type.toLowerCase()) {
    case `alert`:
      r = 255;
      g = 127;
      b = 31;
      type = `  ALERT  `;
      break;
    case `error`:
      r = 255;
      g = 31;
      b = 31;
      type = `  ERROR  `;
      break;
    case `exception`:
      r = 255;
      g = 31;
      b = 255;
      type = `EXCEPTION`;
      break;
    case `attempt`:
      r = 255;
      g = 255;
      b = 31;
      type = ` ATTEMPT `;
      break;
    case `success`:
      r = 31;
      g = 255;
      b = 31;
      type = ` SUCCESS `;
      break;
    case `info`:
      r = 75;
      g = 75;
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
  let formattedStr = ``;
  if (options.showTimestamp === true) {
    formattedStr += ` ${timestampToDate()} ¦`;
  }
  if (options.showPID === true) {
    formattedStr += ` ${process.pid} ¦`;
  }
  if (options.showType === true) {
    formattedStr += ` ${type} ¦`;
  }
  if (options.showTimestamp === false && options.showPID === false && options.showType === false) {
    formattedStr = `${str}`;
  } else {
    formattedStr += ` ${str}`;
  }

  // print the formatted string
  console.log(chalk.rgb(r, g, b)(formattedStr));

  // TODO implement database logging
};
