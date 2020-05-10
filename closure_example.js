function arrayfunction(){
const arr = []

for (var i = 0; i < 5; i++) arr.push((function(i){
return function(){ console.log(i) }
})(i)
)

return arr
}


const func = arrayfunction()

func[0]()
