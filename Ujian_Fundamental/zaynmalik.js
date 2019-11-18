var lelang = function(menit){
    let output=0
    for(var i=1;i<=menit;i++){
        if(i%1==0){
            output+=Math.max(10000+(10000*(20/100)))
        }else if(i%4==1){
            output+=Math.max(10000*(10/100))
        }
    }
    return output
}
console.log(lelang(2))
console.log(lelang(50))

// const lelang=(menit)=>{
//     var awal = 10000
//     var akhir = 0
//     do {
//         if(menit%1==0){
//             akhir+=Math.max(10000+(10000*(20/100)))
//         }else if(menit%4==1){
//             akhir+=Math.max(10000*(10/100))
//         }
//     } while (akhir);
//     if(akhir<30000000){
//         return akhir
//     }else if(akhir==30000000){
//         return 'berhasil terjual'
//     }
// }
// console.log(lelang(50))