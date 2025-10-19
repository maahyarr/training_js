let x = "mahyar".slice(0, 3);
console.log(x);
result = "mahyaramini".substring(2, 8);
console.log(result);
result = "mahyaramini".replace("mahyar", "sasan");

console.log(result);
result = "Mahyaramini".toLowerCase("mahyar");

console.log(result);
result = "Mahyaramini".toUpperCase();

console.log(result);
result = "      Mahyaramini     ".trim();

console.log(result);
result = "      Mahyaramini     ".trimEnd();

console.log(result);
result = "Mahyaramini".padStart(14, "*");

console.log(result);
	
let textin = "Hello world, welcome to the universe.";
result = textin.includes("world");
console.log(result);
	
let texten = "Hello world";
result = texten.endsWith("world");
console.log(result);

	
let textdex = "Hello world, welcome to the universe.";
result = textdex.indexOf("to");
console.log(result);
textdexx = "mahydr.amini1996@gmail.com";

result = textdex.indexOf("to");
result =textdexx.slice(0, textdexx.lastIndexOf("@"));
console.log(result);
	
 text = "Hello world!";
 result = text.repeat(2);
console.log(result);