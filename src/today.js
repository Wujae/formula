// Copyright 2015-2018 FormBucket LLC

import datevalue from "./datevalue";

export default function today() {
  var d = new Date();
  return datevalue(d.toLocaleDateString());
}
