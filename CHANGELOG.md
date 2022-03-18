## CHANGELOG

### 0.2.1: shorthand functions
- implemented `logInfo()`, `logSuccess()`, `logAttempt()`, `logAlert()` / `logWarning()` (these two are the same function), `logError()`, and `logException()` shorthand functions
- slightly lightened the colors for logging info types

### 0.1.4: more flexible types
- made the `type` option a little more flexible, giving some of the types multiple possible string values to match them with

### 0.1.3: db options / space fix
- fixed an issue where a space was often appended to the start of strings
- added options for only logging to a database or only logging to a console, despite possibly being provided database details - not yet fully implemented
- added a 'test' script to `../package.json`

### 0.1.2: brighter colors
- made most colors a little brighter
- added a test for generic logging

### 0.1.1: initial commit
- initial commit
