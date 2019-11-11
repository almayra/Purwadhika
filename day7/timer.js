//timer 10-1
var x = setInterval(waktu, 1000);
var time = 10
function waktu(){
    console.log(time);
    time-=1
    if(time==0){
        clearInterval(x)
    }
}