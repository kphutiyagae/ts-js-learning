import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";
// Date.prototype.toTemporalInstant = toTemporalInstant;

const temporalDate = Temporal.Now.plainDateTimeISO();
const temporalZonedTime = Temporal.Now.zonedDateTime();
console.log(temporalDate.toString());
console.log(temporalZonedTime.toString());
