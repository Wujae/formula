// Copyright 2015-2018 FormBucket LLC

import { ERRORTYPES as error } from "./error";

// IFBLANK return the `value` if `#NA!`, otherwise it returns `value_if_na`.
export default function ifna(value, value_if_na) {
  return value === error.na ? value_if_na : value;
}
