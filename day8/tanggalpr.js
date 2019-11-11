// var day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
// var month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desemnber']

// let skrg = new Date()
// function hariini (){
//     var hari = skrg.getDay()
//     var tanggal = skrg.getDate()
//     var bulan = skrg.getMonth()
//     var tahun = skrg.getFullYear()
//     return day[hari] + ', ' + tanggal + ' ' + month[bulan] + ' ' + tahun
// }
// console.log(hariini())

var day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'] //make split juga bisa
var month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

var skrg = new Date()
function hariin(){
    var hari = skrg.getDay()
    var tanggal = skrg.getDate()
    var bulan = skrg.getMonth()
    var tahun = skrg.getFullYear()
    return day[hari]+', '+tanggal+' '+month[bulan]+' '+tahun
}
console.log(hariin())