	
approved = true;
approved = false;
 
// Truthy values
if (true) // boolean -> true
if ({}) // any object (empty or not) -> true
if ([]) // any array (empty or note) -> true
if (42) // any non-zero interger -> true
if ("0") // any string -> true
if ("false") // any string including "false" -> true
if (new Date()) // any Date object -> true
if (-42) // any negative number -> true
if (12n) // BigInt, 12n is truthy. -> true
if (3.14) // any non-zero float -> true
if (-3.14) // any negative float -> true
if (Infinity) // -> true
if (-Infinity) // -> true
  
// Falsy values
if (false) // The keyword false -> false
if (0) // The number zero -> false
if (-0) // The number negative zero -> false
if (0n) // BigInt, 0n is falsy. -> false
if ("") // Empty string value -> false
if (null) // -> false
if (undefined) // -> false
if (NaN) // not a number -> false
