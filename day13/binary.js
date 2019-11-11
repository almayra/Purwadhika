//binary to decimal
var binary = '11'
var decimal = parseInt(binary, 2)
console.log(decimal)

//decimal to binary cara internet make for
function tobinary(number){
    var result = [];
    for (i=number;i>0;i=parseInt(i/2)){
        result.push(i%2)
    }
    return result.reverse().join('')
}
console.log(tobinary(4))

//cara kak dino make do-while
const decimalToBiner=(angka)=>{
    var newarr =[]
    do {
        var sisa=angka%2
        newarr.push(sisa)
        angka/=2
        angka=Math.floor(angka)
    } while (angka>0)
    return newarr.reverse().join('')
}
console.log(decimalToBiner(50))