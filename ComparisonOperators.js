/*
Comparison Operators - عملگرهای مقایسه

در برنامه نویسی نیاز است که بتوانیم مقادیر را با هم مقایسه کنیم. برای این کار از عملگرهای زیر استفاده می‌شود.

عملگر	توضیح
==	برابر با
===	برابر مقدار و تایپ
=!	نا برابر
==!	نا برابر مقدار یا تایپ
<	بزرگ‌تر
>	کوچک‌تر
=<	بزرگ‌تر مساوی
=>	کوچک‌تر مساوی


*/
let age=22
if (age === 18) {
	console.log('You are alowed');
} else {
	console.log('You are not alowed!')
}

//swich
	
const color = 'green';
 
switch (color) {
  case 'green': {
    console.log('Go...')
  }
  break;
 
  case 'yellow': console.log('Slow.');
  break;
 
  case 'red': console.log('Stop!'); break;
 
  default: console.log('The color is wrong!');
}