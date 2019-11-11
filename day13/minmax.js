const minMax=(a=[],b)=>{
    a.sort((ar,be)=>ar-be)
    if(b=='min'){
        return a[0]
    }else{
        return a[a.length-1]
    }
}
console.log(minMax([1,7,798,54,32,1,127,8,9],'max'))
console.log(minMax([3094,78,83,1,3,2,66,89,98],'min'))