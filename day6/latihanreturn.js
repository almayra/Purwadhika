//buat function yang menerima satu parameter
function urutan(angka){
    var output =''
    for(var i=1;i<angka;i++){
        if((i)%3== 0 && (i)%5== 0){
            output+='Purwadhika '
        }else if((i)%3==0){
            output+='Purwa '
        }else if((i)%5==0){
            output+='Dhika '
        }else{
            output+=(i)+' '
        }
    }
    return output
}
console.log(urutan(20))

