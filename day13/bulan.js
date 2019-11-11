function tanggal(a){
    var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    var tanggal = a[0]+a[1]
    var month = a[2]+a[3]
    var tahun = a[4]+a[5]+a[6]+a[7]
    var newmonth = ''
    for(var i=0;i<bulan.length;i++){
        if(month==(i+1)){
            newmonth=bulan[i]
        }
    }return `${tanggal}-${newmonth}-${tahun}`
}
console.log(tanggal('13092019'))