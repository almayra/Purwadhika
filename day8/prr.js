//buat function include
//buat function yang ngereturn hari tanggal tahun (masukkan ke dalam array memakai newdate fullmonth dll)

var fruits = ["Banana", "Orange", "Apple", "Mango"];
function includes(a, start){
    for(var i=0;i<fruits.length;i++){
        if(fruits[i]==a && start <= i || fruits[i] == a && start == undefined){
            return true
        }
    }
    return false
}
console.log(includes('Banana',2))
console.log(includes('Apple',3))
console.log(includes('Mango'))
console.log(includes('Orange',3))

const cloneincl = function(a='',b){
    if(b.length==1){
        for(i=0;i<a.length;i++){
            if(b==a[i]){
                return true
            }
        }
        return false
    }else{
        for(i=0;i<a.length;i++){
            if(b==a.substr(i,b.length)){
                return true
            }
        }
        return false
    }
}
console.log(cloneincl('hello', 'el'))
// var abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
// var numbstring = 123456789
// numbstring = 
// console.log(abc)