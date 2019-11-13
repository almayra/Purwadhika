function kata(huruf){
    var vowel='aiueo'.split('')
    var vcount=0
    var conson='abcdefghijklmnopqrstuvwxyz'.split('')
    var ccount=0

    for(var i=0;i<huruf.length;i++){
        if(vowel.indexOf(huruf[i]) !== -1 ){ //harus ada -1 karena index of ngitung dari 0
            vcount++
        }else{
            ccount
        }
    }
    return vcount
}
console.log(kata('almayra zamzamy'))