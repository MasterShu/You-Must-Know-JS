/**
 * Checking Equality
 * == and ===
 * == allow coercion (type different)
 * === disallow coercion (type same)
 */

// Coercive Equality
// When the types is already same. == and === doing the same things.

// Coercive Equality
// When the types are different, == and === have a different behavior.
// null == undefined
const msg1 = {title: null}
const msg2 = {}

if ((msg1.title === null || msg1.title === undefined) && (msg2.title === null || msg2.title === undefined)) {
    console.log("All clear!!!")
}

// Make code more clean by use ==
if (msg1.title == null && msg2.title == null) {
    console.log("Also all clear!!!")
}

/**
 * == isn't about comparisons with unknown types,
 * It's about comparisons with known type(s).
 * Optionally where conversions are helpful
 */