function kantor(jamMasuk, jamKeluar, posisi){
    var hasil = 0
    if(posisi=='staff'){
        hasil = (jamKeluar-jamMasuk)*2000
    }else if(posisi=='CEO'){
        hasil = (jamKeluar-jamMasuk)*1000
    }else if(posisi=='manager'){
        hasil = (jamKeluar-jamMasuk)*700
    }else{
        gaji = 'tidak ada gaji'
    }
    var lama = jamKeluar-jamMasuk
    var output = ('Anda masuk kantor selama '+ lama + ' jam, gaji anda sebesar Rp.' + hasil)
    return hasil
}

console.log(kantor(8,15,'CEO'))
console.log(kantor(8,19,'staff'))
console.log(kantor(8,20,'manager'))