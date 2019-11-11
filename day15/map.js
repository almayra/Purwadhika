//map
var arr=[1,2,3,4,5]
// newArr=arr.map((val)=>val*10)
// console.log(arr)
// console.log(newArr)

var mapalakita=(a,b)=>{
    let output=[]
    for(var i=0;i<a.length;i++){
        output.push(b(a[i]))
    }
    return output
}
console.log(mapalakita(arr,(val)=>val*10)) //arr ini dibaca dr luar bukan dalem function

//filter
var filter=(arr,b)=>{
    let output=[]
    for(var i=0;i<arr.length;i++){
        if(b(arr[i])){
            output.push(arr[i])
        }
    }
    return output
}
console.log(filter(arr,(val)=>val>4))