//cara kak kartika
function pemangkatan (num, angka){
    var hasil = 1
    for(var i=0;i<angka;i++){
        hasil *= num
    }
     return hasil   
    }
console.log(pemangkatan(7,4))
console.log(pemangkatan(7,1))

//cara kak dino
function pangkat(a,b){
    if(b==0){
        return 1
    }else{
        output = a
        for(i=0;i<b-1;i++){
            output*=a
        }
        return output
    }
}

console.log(pangkat(7,5))