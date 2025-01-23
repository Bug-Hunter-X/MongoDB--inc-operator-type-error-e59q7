# MongoDB $inc operator type error
This example demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical value by a specified amount.  However, it's crucial to ensure that the increment value is a number. Providing a string will lead to an error.

The `bug.js` file contains code that showcases this issue, while `bugSolution.js` offers the corrected code.

## Setup
Ensure you have a MongoDB instance running and a collection named 'users' with at least one document containing a numeric 'age' field.