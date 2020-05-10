// map, filter and reduce


function map (arr, fn){

const newArr = []

arr.forEach(function(val){ newArr.push(fn(val)) })

return newArr
}


function addOne(val){

return val + 1
}


console.log(map([0,1,2,3,4], addOne))
