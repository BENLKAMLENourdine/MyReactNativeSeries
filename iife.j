//  iife: immediately invoked function expression -- they don't add to the global object


const syHello = (function(){
const message = "hello"

function sayhello(){console.log(message)}

return sayhello
})()


console.log(typeof message)
syHello()



// counter

const counter = (function(){

let i = 0

return {
	inc: function(){ i = i + 1 },
	get: function(){ console.log(i) },
	}
})()


counter.get()
counter.inc()
counter.get()




