// Copyright 2015 Peter W Moresi

import {FLATTEN} from './FLATTEN';
import {ISNUMBER} from './ISNUMBER';

// MIN returns the smallest number from a `list`.
export function MIN(...list) {
  return FLATTEN( list ).reduce((min, next) => {
    if (ISNUMBER(next)) {
      return Math.min(min, next);
    }

    return min;

  }, Number.POSITIVE_INFINITY );
}