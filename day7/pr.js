//func sum ([1,2,3,4,5,6])=10 length itu yang ngitung panjang karakter parameter
function sum(a){
    var output = 0
    for(i=0;i<a.length;i++){
        output+=parseInt(a[i])
    }
    return output/a.length
}
console.log(sum([1,2,3,4]))
console.log(sum([5,5,5,10]))

//1. jadiin string tp hasilnya harus sama
//2. buat func pencarian mobil yang menerima satu parameter

function sumString(str){
    var sum = 0
    for(var i=0;i<str.length;i++){
        sum+= parseInt(str[i])
    }
    return sum/str.length
}
console.log(sumString('1234'))
console.log(sumString('123456'))

//array true or false
let mobil=['Alya', 'Avanza', 'Xenia', 'Mercedes', 'Camaro SS']
function check(barang){
    for(var i=0;i<mobil.length;i++){
        if(mobil[i].toLowerCase()==barang.toLowerCase()){
            return true
        }
    }
    return false
}
console.log(check('camaro ss'))
