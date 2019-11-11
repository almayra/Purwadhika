function faktor(number){
        var hasil = 1
        for(var i=number;i>=1;i--){
            hasil*= i
        }
        return hasil
    }

    console.log(faktor(3))

//yang for bisa juga (var i=1;i<=number;i++)

//cara kak dino
function faktorial(a){
    for(i=a-1;i>0;i--){
        a*=i
    }
    return a
}
console.log(faktorial(5))
