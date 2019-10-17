//PRIMITIVES TYPE
//string
//float
//Number
//null
//undefined
//symbol
//
/*
const foo = 1 ;
let bar = foo; // settings new value to bar
bar  = 9;
console.log(foo , bar ) // foot = 1 & bar = 9

const txt = 'hello world'
const deci = 10.2
const num = foo ;
const someOf = null
let  item ;

console.log('String : ' + txt + ' \n' + ' float : ' + deci + ' \n' + ' Number : ' + num + ' \n' +  ' Null : ' + someOf + ' \n' + 'undefined : ' + item)
*/
//COMPLEX TYPES
/*
const tab = [1,2];
const Ctab = tab ;
Ctab[0] = 9;
console.log(tab[0] , Ctab[0]) //=> foo = 9 and bar = 9
*/
//REFERENCES
//Bad practice
/*
var a = 1;
var b = 2;

// GOod practice with Es5
const a = 1
let b = 2

//to instead value its better to use let
var count = 1
if (true){
  count += 4
}
//Best practice
let count = 1
if(true){
  count *=19
}
console.log(count)


// let & const are block-scoped
{
  let bo = 'bon'
  const glo = 'globe'

  console.log('Work inside : ' + bo) // work inside the block-scoped
}
console.log(bo) // doesnt work outside the block-scoped
*/

//OBJECTS
/*
const person = {
  id: 1 ,
  name: 'jean philippe',
  //[getKey('enabled') => return 'enable']: true,
};*/
/*console.log(atom.addValue(12))


const diff = {
  value: 12 ,
  sous(value){
    return this.value - value
  }
}

console.log(diff.sous(1726))

const atom = {
  value:1 ,
  addValue: function(value){
    return atom.value + value
  }
}
const value =  12
console.log(atom.addValue(12))


const diff = {
  value: 12 ,
  sous(value){
    return this.value - value
  }
}

console.log(diff.sous(1726))
const obj = {
  good: 'fell good',
  bad: 'fell bad'
}
console.log(obj)

const original = {a:1 , b:2}
const tab = [1 , 2]
const Ntab = [...tab ,tab[0]]
const nouv = {...original , c:3 , d:4} // ...nameOfobjectOrArray add the new stuuf to array or object
console.log(nouv)
console.log(Ntab)

*/

//ARRAYS

var items = [] //new arrays
const s = [...items , 3]
var items = s
let f = [...items]
console.log(items)
console.table(items)
console.table(f)
