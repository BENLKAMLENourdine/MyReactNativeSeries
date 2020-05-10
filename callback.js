function AsyncFunc(callback){
setTimeout(function(){callback('hi')}, 1000)
}


AsyncFunc(console.log)

