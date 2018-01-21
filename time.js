var hour= 8;
var min= 10;
var period= "AM"

var x= "it's"

if(min > 30){
    x += "almost" + (hour + 1)
}else{
    x += "just after" + hour
}

if(period == "PM"){
    x += "in the evening"
}else{
    x += "in the morning"
}
console.log(x)