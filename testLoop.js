let bazi = confirm("yes?");
if (bazi) {
  let num = Math.floor(Math.random() * 10);
  console.log(num);
  ch1 = +prompt(`guess the number? (5 shans dari)`);
    if (ch1 === num) {
        alert("afarin avalin hadset dorost bood")
    }else{
      for (let i = 4; i > 0; i--) {
    ch = +prompt(`wrong dobare bezan... chance left:${"❤".repeat(i)}`);
    if (ch === num) {
      break;  
    }
  }
  if (ch===num) {
    alert(`good job....javab:${num}`)
    
  }else{
    alert(`natonesti... javab:${num}`)
  }

    }

}
