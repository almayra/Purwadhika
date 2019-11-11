var number = 1
var number2 = 1
while(number<=4){
    while(number2<3){
        console.log('this' + number2)
        number2++
    }
    number2 = 1
    console.log(number)
    number++
    console.log(number)
}
console.log(number)