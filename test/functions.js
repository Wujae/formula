import test from "tape";
import * as ff from "../fn/functions";

test("lower case functions should be there", function(t) {
  t.plan(155);
  t.ok(ff.ABS, "abs should be there");
  t.ok(ff.ACCRINT, "accrint should be there");
  t.ok(ff.ACOS, "acos should be there");
  t.ok(ff.ACOSH, "acosh should be there");
  t.ok(ff.ACOT, "acot should be there");
  t.ok(ff.ACOTH, "acoth should be there");
  t.ok(ff.ASIN, "asin should be there");
  t.ok(ff.ASINH, "asinh should be there");
  t.ok(ff.ATAN, "atan should be there");
  t.ok(ff.ATAN2, "atan2 should be there");
  t.ok(ff.ADD, "add should be there");
  t.ok(ff.AND, "and should be there");
  t.ok(ff.AVERAGE, "average should be there");
  t.ok(ff.BASE, "base should be there");
  t.ok(ff.BIN2DEC, "bin2dec should be there");
  t.ok(ff.BRANCH, "branch should be there");
  t.ok(ff.CAMELCASE, "camelcase should be there");
  t.ok(ff.CEILING, "ceiling should be there");
  t.ok(ff.CELLINDEX, "cellindex should be there");
  t.ok(ff.CHAR, "char should be there");
  t.ok(ff.CHOOSE, "choose should be there");
  t.ok(ff.CONCATENATE, "concatenate should be there");
  t.ok(ff.CODE, "code should be there");
  t.ok(ff.COLUMN, "column should be there");
  t.ok(ff.COLUMNLETTER, "columnletter should be there");
  t.ok(ff.COLUMNNUMBER, "columnnumber should be there");
  t.ok(ff.COS, "cos should be there");
  t.ok(ff.CUMIPMT, "cumipmt should be there");
  t.ok(ff.DATE, "date should be there");
  t.ok(ff.DATEDIF, "datedif should be there");
  t.ok(ff.DATEVALUE, "datevalue should be there");
  t.ok(ff.DAYS360, "days360 should be there");
  t.ok(ff.DAY, "day should be there");
  t.ok(ff.DEC2BIN, "dec2bin should be there");
  t.ok(ff.DIVIDE, "divide should be there");
  t.ok(ff.DECODEBASE64, "decodebase64 should be there");
  t.ok(ff.DECODEJWT, "decodejwt should be there");
  t.ok(ff.DEGREES, "degrees should be there");
  t.ok(ff.EDATE, "edate should be there");
  t.ok(ff.EOMONTH, "eomonth should be there");
  t.ok(ff.EQ, "eq should be there");
  t.ok(ff.EVEN, "even should be there");
  t.ok(ff.EXACT, "exact should be there");
  t.ok(ff.FILTER, "filter should be there");
  t.ok(ff.FIND, "find should be there");
  t.ok(ff.FLATTEN, "flatten should be there");
  t.ok(ff.FLOOR, "floor should be there");
  t.ok(ff.FV, "fv should be there");
  t.ok(ff.GET, "get should be there");
  t.ok(ff.GT, "gt should be there");
  t.ok(ff.GTE, "gte should be there");
  t.ok(ff.GROUP, "group should be there");
  t.ok(ff.GUID, "guid should be there");
  t.ok(ff.HLOOKUP, "hlookup should be there");
  t.ok(ff.HOUR, "hour should be there");
  t.ok(ff.INCLUDES, "includes should be there");
  t.ok(ff.INT, "int should be there");
  t.ok(ff.IF, "if should be there");
  t.ok(ff.IFNA, "ifna should be there");
  t.ok(ff.IFBLANK, "ifblank should be there");
  t.ok(ff.IFEMPTY, "ifempty should be there");
  t.ok(ff.IFS, "ifs should be there");
  t.ok(ff.INDEX, "index should be there");
  t.ok(ff.INDEX2COL, "index2col should be there");
  t.ok(ff.INDEX2ROW, "index2row should be there");
  t.ok(ff.IPMT, "ipmt should be there");
  t.ok(ff.ISARRAY, "isarray should be there");
  t.ok(ff.ISBLANK, "isblank should be there");
  t.ok(ff.ISDATE, "isdate should be there");
  t.ok(ff.ISEMPTY, "isempty should be there");
  t.ok(ff.ISEMAIL, "isemail should be there");
  t.ok(ff.ISERROR, "iserror should be there");
  t.ok(ff.ISEVEN, "iseven should be there");
  t.ok(ff.ISFALSY, "isfalsy should be there");
  t.ok(ff.ISFUNCTION, "isfunction should be there");
  t.ok(ff.ISLEAPYEAR, "isleapyear should be there");
  t.ok(ff.ISOBJECT, "isobject should be there");
  t.ok(ff.ISNA, "isna should be there");
  t.ok(ff.ISNAN, "isnan should be there");
  t.ok(ff.ISNUMBER, "isnumber should be there");
  t.ok(ff.ISODD, "isodd should be there");
  t.ok(ff.ISREF, "isref should be there");
  t.ok(ff.ISTEXT, "istext should be there");
  t.ok(ff.ISTRUTHY, "istruthy should be there");
  t.ok(ff.ISOWEEKNUM, "isoweeknum should be there");
  t.ok(ff.ISURL, "isurl should be there");
  t.ok(ff.ISWHOLENUMBER, "iswholenumber should be there");
  t.ok(ff.JOIN, "join should be there");
  t.ok(ff.LEFT, "left should be there");
  t.ok(ff.LEN, "len should be there");
  t.ok(ff.LOOKUP, "lookup should be there");
  t.ok(ff.LOWER, "lower should be there");
  t.ok(ff.LT, "lt should be there");
  t.ok(ff.LTE, "lte should be there");
  t.ok(ff.MAP, "map should be there");
  t.ok(ff.MATCH, "match should be there");
  t.ok(ff.MIN, "min should be there");
  t.ok(ff.MINUTE, "minute should be there");
  t.ok(ff.MAX, "max should be there");
  t.ok(ff.MULTIPLY, "multiply should be there");
  t.ok(ff.N, "n should be there");
  t.ok(ff.NAND, "nand should be there");
  t.ok(ff.NUMBERS, "numbers should be there");
  t.ok(ff.NUMBERVALUE, "numbervalue should be there");
  t.ok(ff.NE, "ne should be there");
  t.ok(ff.NOR, "nor should be there");
  t.ok(ff.NOT, "not should be there");
  t.ok(ff.NOTINCLUDES, "notincludes should be there");
  t.ok(ff.NOW, "now should be there");
  t.ok(ff.NPV, "npv should be there");
  t.ok(ff.NPER, "nper should be there");
  t.ok(ff.OCT2DEC, "oct2dec should be there");
  t.ok(ff.OR, "or should be there");
  t.ok(ff.PARSEBOOL, "parsebool should be there");
  t.ok(ff.PARSEDATE, "parsedate should be there");
  t.ok(ff.PARSEQUERY, "parsequery should be there");
  t.ok(ff.PI, "pi should be there");
  t.ok(ff.PLUCK, "pluck should be there");
  t.ok(ff.PMT, "pmt should be there");
  t.ok(ff.POWER, "power should be there");
  t.ok(ff.PROPER, "proper should be there");
  t.ok(ff.PV, "pv should be there");
  t.ok(ff.QUERY, "query should be there");
  t.ok(ff.REDUCE, "reduce should be there");
  t.ok(ff.REF, "ref should be there");
  t.ok(ff.REPT, "rept should be there");
  t.ok(ff.REPLACE, "replace should be there");
  t.ok(ff.RIGHT, "right should be there");
  t.ok(ff.SEARCH, "search should be there");
  t.ok(ff.SECOND, "second should be there");
  t.ok(ff.SELECT, "select should be there");
  t.ok(ff.SNAKECASE, "snakecase should be there");
  t.ok(ff.SPLIT, "split should be there");
  t.ok(ff.SIN, "sin should be there");
  t.ok(ff.SOME, "some should be there");
  t.ok(ff.SORT, "sort should be there");
  t.ok(ff.SUBTRACT, "subtract should be there");
  t.ok(ff.SUBSTITUTE, "substitute should be there");
  t.ok(ff.SUBSTITUTEALL, "substituteAll should be there");
  t.ok(ff.SURROUNDKEYS, "surroundKeys should be there");
  t.ok(ff.SUM, "sum should be there");
  t.ok(ff.TAN, "tan should be there");
  t.ok(ff.TAU, "tau should be there");
  t.ok(ff.TEXT, "text should be there");
  t.ok(ff.TIME, "time should be there");
  t.ok(ff.TIMEVALUE, "timevalue should be there");
  t.ok(ff.TODAY, "today should be there");
  t.ok(ff.TRUNC, "trunc should be there");
  t.ok(ff.UNFLATTEN, "unflatten should be there");
  t.ok(ff.UNIQUE, "unique should be there");
  t.ok(ff.UPPER, "upper should be there");
  t.ok(ff.VLOOKUP, "vlookup should be there");
  t.ok(ff.XOR, "xor should be there");
  t.ok(ff.YEAR, "year should be there");
  t.ok(ff.YEARFRAC, "yearfrac should be there");
});

// test('camel case functions should be there', function(t) {
// })
