let newPromise = new Promise(function(resolve, reject){
	let isClean = false
  if(isClean){
  	resolve("clean")
  }else{
  	reject("dirty")
  }
})

newPromise.then(function(success){
	console.log(success)
}).catch(function(fail){
	console.log(fail)
})


//generator
var myGen = function*(i){
	yield i+1
  yield i+2
  console.log("hahsdfasdjfkl")
  yield i+3
  
}

var myGen2 = function*(i){
	yield i+1
  yield* myGen(i)
  yield i+10
}

var gen = myGen2(10)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//generator 2
let getNextUser = function*(){
	let i = 0
  while(i<10){
  	yield i++
  }
}

let gen3 = getNextUser()

let UserCreater = function(userId){
	console.log("this is the" + " " + userId +" "+ "user")
}

function run(){
  for(var i =0; i<10; i++){
    UserCreater(gen3.next().value)
  }
}

run()