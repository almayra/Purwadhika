const koin=(uang)=>{
    var sen = [25,10,5,1]
    var brpkoin=0
    for(i=0;i<sen.length;i++){
        if(uang>sen[0]){
            brpkoin++
        }else if(uang>sen[1]){
            brpkoin++
        }else if(uang>sen[2]){
            brpkoin++
        }else if(uang>sen[3]){
            brpkoin++
        }
    }
    return brpkoin
}
console.log(koin(49)) //jawabannya salah tapi paling mendekati

// const koin=(uang)=>{
//     var sen = [25,10,5,1]
//     var brpkoin=0
//     do {
//         if(uang>sen[0]){
//             brpkoin++
//         }else if(uang>sen[1]){
//             brpkoin++
//         }else if(uang>sen[2]){
//             brpkoin++
//         }else if(uang>sen[3]){
//             brpkoin++
//         }
//     } while (koin<uang);
//     return brpkoin
// }
// //console.log(koin(49))

// var sen = [25,10,5,1]
// var brpkoin=0
// sen.forEach(uang => {
//     if(uang>sen[0]){
//         brpkoin++
//     }else if(uang>sen[1]){
//         brpkoin++
//     }else if(uang>sen[2]){
//         brpkoin++
//     }else if(uang>sen[3]){
//         brpkoin++
//     }
//     return brpkoin
// });
// console.log(koin(49))