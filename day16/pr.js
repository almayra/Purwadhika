//discount
const price=(harga,persen)=>{
    var diskon=harga*(persen/100)
    var hasil=harga-diskon
    return hasil
}
console.log(price(10000,20))

//ganjilgenap
const ganjilgenap=(plat,tanggal)=>{
   var platt= plat.split(' ')[1]%2
   var tgl = tanggal%2
   var output=''
   if(platt==tgl){
        output+=('boleh lewat')
   }else{
       output+=('tidak boleh lewat')
   }
   return output
}
console.log(ganjilgenap('b 1234 cd',23))
console.log(ganjilgenap('b 532 ay',12))

//domain
function getdomain(input){
    var hasil=input.split('.')[1]
    return hasil
}
console.log(getdomain('https://www.w3schools.com/'))

//median
function getmiddle(str){
    let median = ''
    if(str.length%2){
        median = str[Math.floor(str.length/2)]
    }else{
        const mid1 = str[(str.length/2)-1] //-1 karena arraynya 0-3
        const mid2 = str[(str.length/2)]
        median=(mid1+mid2) //seharusnya gamake /2
    }
    return median
}
console.log(getmiddle('test'))