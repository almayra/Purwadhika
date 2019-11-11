function joinsendiri(a,b){
    var output = '' //kalo cuma ini sm return output hasilnya cm jadi aya
    for(var i=0;i<a.length;i++){
        if(i!==a.length-1){ //kalo kak dino if(i<a.length-1)
            output+=a[i]+b
        }else{
            output+=a[i] //kalo gaada ini hasilnya jadi a+y+a+
        }
    }
    return output
}
console.log(joinsendiri(['a', 'y', 'a', 'a'],'-'))
