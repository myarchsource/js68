// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The parseInt property has not prototype property
es5id: 15.1.2.2_A9.6
es6id: 18.2.5
esid: sec-parseint-string-radix
description: Checking parseInt.prototype
---*/

//CHECK#1
if (parseInt.prototype !== undefined) {
  $ERROR('#1: parseInt.prototype === undefined. Actual: ' + (parseInt.prototype));
}

reportCompare(0, 0);
