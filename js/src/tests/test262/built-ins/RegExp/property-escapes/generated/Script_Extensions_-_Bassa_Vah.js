// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Bassa_Vah`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x016AD0, 0x016AED],
    [0x016AF0, 0x016AF5]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Bassa_Vah}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Bassa_Vah}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Bass}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Bass}"
);
testPropertyEscapes(
  /^\p{scx=Bassa_Vah}+$/u,
  matchSymbols,
  "\\p{scx=Bassa_Vah}"
);
testPropertyEscapes(
  /^\p{scx=Bass}+$/u,
  matchSymbols,
  "\\p{scx=Bass}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016ACF],
    [0x016AEE, 0x016AEF],
    [0x016AF6, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Bassa_Vah}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Bassa_Vah}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Bass}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Bass}"
);
testPropertyEscapes(
  /^\P{scx=Bassa_Vah}+$/u,
  nonMatchSymbols,
  "\\P{scx=Bassa_Vah}"
);
testPropertyEscapes(
  /^\P{scx=Bass}+$/u,
  nonMatchSymbols,
  "\\P{scx=Bass}"
);

reportCompare(0, 0);