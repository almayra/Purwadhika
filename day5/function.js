//function namaku (nama,usia,hobby){
  //  console.log('nama kalian'+ nama + 'usiaku adalah '+ usia + 'hobbyku adalah'+hobby )
//}
//namaku('susi')

function operator(angka, angkalain, perhitungan){
    var hasil = 0
    if(perhitungan=='tambah'){
        hasil=angka+angkalain
    }else if(perhitungan=='kurang'){
        hasil=angka-angkalain
    }else if(perhitungan=='bagi'){
        hasil=angka/angkalain
    }else if(perhitungan=='kali'){
        hasil=angka*angkalain
    }
    return hasil //return untuk apa yg kita pengen
}
console.log(operator(4,6,'tambah')) //isi ini sesuai dengan yang diatas
console.log(operator(3,7,'kurang'))
console.log(operator(8,2,'bagi'))
console.log(operator(6,3,'kali'))