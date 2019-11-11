//soal pertama
function nama(str){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let output=''
    for(var i=0;i<str.length;i++){
        for(var j=0;j<lowercase.length;j++){
            if(str[i]==lowercase[j]){
                output += uppercase[j]
            }else if(str[i]==uppercase[j]){
                output += lowercase[j]
            }
        }
    }
    return output
}
console.log(nama('AYA'))
console.log(nama('aya'))
//soal kedua
function balik(str){
    let output=''
    for(var i=str.length-1;i>=0;i--){
        output+=str[i]
    }
    return output
}
console.log(balik('almayra'))
//console.log(balik('jaladara'))
//cara kak dino
function tolowercase(str,b){
    var uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    var lowercase='abcdefghijklmnopqrstuvwxyz'.split('')
    let output=''
    for(var i=0;i<str.length;i++){
        for(var j=0;j<uppercase.length;j++){
            if(str[i]==uppercase[j]){
                if(b=='lower'){
                    output+=lowercase[j]
                }else{
                    output+=uppercase[j]
                }
            }if(str[i]==lowercase[j]){
                if(b=='lower'){
                    output+=lowercase[j]
                }else{
                    output+=uppercase[j]
                }
            }
        }
    }
    return output
}
console.log(tolowercase('aLMAyra'))