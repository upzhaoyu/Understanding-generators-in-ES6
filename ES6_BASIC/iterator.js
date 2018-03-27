let myObject = {
    age:2,
    name:'jamesZhao',
    friends:[ 'mike', 'nihong'],
    haveFun: function(){
        return name
    }
}

for(let key in myObject){
	console.log(key)
}

// to see how this object not iterable
/* for(let key of myObject){
  console.log(key)
} */


let myArray = [1, 3, 4]

for(let val of myArray){
	console.log(val)
}


let mySet = new Set([1, 3, 4])

for(let val of mySet){
	console.log(val)
}

let newArray = [1, 23, 43, 54]

let iterator = newArray[(Symbol.iterator)]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())