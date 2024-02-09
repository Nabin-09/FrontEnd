const prompt = require('prompt-sync')();
var n1 =prompt("What is your name?");
var n2 = prompt("What is her name?");
var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore) + 1;
if(loveScore>70){
    alert("your love score is "+ loveScore +"%" + " akhand premi joda");
}
else if ((loveScore=>30)&&(loveScore<=70)){
    alert("your love score is "+ loveScore +"%"+ " Homiesexual guys");
}
else{
    alert("Your love score is "+ loveScore+"%"+" nahi ho skta tumhara kuch");
}
