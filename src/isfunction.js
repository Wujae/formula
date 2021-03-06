// Copyright 2015-2018 FormBucket LLC
import isasync from "./isasyncfunction";

// ISFUNCTION returns true when `value` is a function.
export default function isfunction(value) {
  return (
    (value && Object.prototype.toString.call(value) == "[object Function]") ||
    isasync(value)
  );
}
