
confirm('confirm?')
alert('alert')
let valR = 999;
let parseee = parseInt(4.14)
console.log(parseee)
//let valR = Math.round(Math.random()*100);
/* for(let i=0;i<13;i++){
    console.log('i', i)
    console.log(`valR ${valR}`)
} */
try{valR>100
console.log('owueqfvb')} catch(err){
    console.log('caught')
    console.error('you made an error')
}
try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error("outer", ex.message);
  } 
  // Logs:
  // "inner" "oops"
  // "finally"
  const numbers = [65,44];

  let txt = 1;
  for (let x of numbers) {
    txt += x;
  }
  console.log(txt)
  let anewset = new Set();
  const d = "this is some text";
  const e  = 17
  anewset.add(d)
  anewset.add(e)
  console.log(anewset)
  for(let x of anewset){
    console.log(x)
  }
  console.log(`value ${anewset.values()}`)
  let anewmap = new Map([
    ["listone", 12],
    ["listtwo", 2]
  ]);
  anewmap.set('bonuslist', 123)
  // console.log(anewmap)
  // console.log(anewmap.get("listone"))
  // console.log(anewmap.has("listone"))
  // console.log(anewmap.has("onelist"))
  
const p = new Date("2023-03-24");
console.log(p.getFullYear());

console.log('window width:', screen.width)
let valueB = prompt('nefbe;fbw')
if(valueB = '7') {
  valueB = Number(valueB)

}
switch(valueB){
  case 0:
    console.log('case 0:',valueB);
  case '0':
    console.log('case 1:',valueB);
  case 7:
    console.log('case 3:',valueB);
    case '7':
    console.log('case 4:',valueB);
    
}
let somevar = 5;
console.log(typeof(somevar.toPrecision()))
current_date = new Date()
console.log(`${current_date.getHours()}:${current_date.getMinutes()}`)

console.log(current_date.getDate())
console.log(current_date.getDay())
console.log(current_date.getYear())
console.log(current_date.getHours())
console.log(current_date.getMinutes())
console.log(current_date.getSeconds())
console.log(current_date.getMonth())
console.log(current_date.getDate())
console.log(current_date.toLocaleDateString())
debugger;
while(true){
  console.log('print')
  break
}
debugger;
let alist = [1, 2, 3, 4, 5,]
for(i in alist){
  console.log(i)
}
// while(true){
//   print()
// }
let a = 'a'
for(let i = 0; i<5; a+=a){
  console.log(a)
  i+=1
}
const z = document.createElement('div');
z.innerHTML = 'JavaScript DOM';
document.body.appendChild(e);
debugger;