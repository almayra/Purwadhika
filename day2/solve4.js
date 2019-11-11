var a=485
console.log(a)
var tahun=(Math.floor(a/360))
a=a%360
console.log(a)
var bulan=(Math.floor(a/30))
a=a%30
console.log(tahun +'tahun, '+bulan+' bulan, '+a + ' hari')